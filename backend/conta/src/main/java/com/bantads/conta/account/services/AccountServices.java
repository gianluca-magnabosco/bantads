package com.bantads.account.account.services;

import com.bantads.account.account.amqp.account.AccountSender;
import com.bantads.account.account.models.AccountDTO;
import com.bantads.account.account.models.command.AccountC;
import com.bantads.account.account.models.query.AccountQ;
import com.bantads.account.account.repository.command.AccountRepositoryC;
import com.bantads.account.account.repository.query.AccountRepositoryQ;
import com.bantads.account.exceptions.AccountNotFound;
import com.bantads.account.exceptions.DuplicateAccountException;
import com.bantads.account.exceptions.InsufficientFunds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class AccountServices {
    @Autowired
    private AccountRepositoryC commands;

    @Autowired
    private AccountRepositoryQ queries;

    @Autowired
    private AccountSender sender;

    public List<AccountDTO> getAllAccounts() {
        List<AccountQ> accounts = queries.findAll();
        return accounts.stream()
                .map(AccountQ::toDto)
                .collect(Collectors.toList());
    }

    public AccountQ getAccount(Long accountId) throws AccountNotFound {
        AccountQ acc = null;
        try {
            acc = queries.findById(accountId).get();
            return acc;
        } catch (NoSuchElementException e) {
            throw new AccountNotFound();
        }
    }

    public AccountC getAccountC(Long accountId) throws AccountNotFound {
        AccountC acc = null;
        try {
            acc = queries.findById(accountId).get().toCommand();
            return acc;
        } catch (NoSuchElementException e) {
            throw new AccountNotFound();
        }
    }

    public AccountDTO getAccountDTO(Long accountId) throws AccountNotFound {
        AccountQ acc = null;
        try {
            acc = queries.findById(accountId).get();
        } catch (NoSuchElementException e) {
            throw new AccountNotFound();
        }

        AccountDTO dto = acc.toDto();
        return dto;
    }

    public AccountDTO getUserAccountDTO(Long userId) throws AccountNotFound {
        AccountQ acc = null;
        try {
            acc = queries.findByUserId(userId).get();
        } catch (NoSuchElementException e) {
            throw new AccountNotFound();
        }

        AccountDTO dto = acc.toDto();
        return dto;
    }

    public List<AccountDTO> getAccountsByUsers(List<String> usersIds) {
        List<AccountQ> accounts = new ArrayList<>();

        for(String id : usersIds) {
            try{
                accounts.add(queries.findByUserId(Long.parseLong(id)).get());
            }catch (NoSuchElementException e) {
                continue;
            }
        }

        return accounts.stream()
                .map(AccountQ::toDto)
                .collect(Collectors.toList());
    }

    public AccountDTO createAccount(AccountDTO newAccount) throws DuplicateAccountException {
        newAccount.setId(null); // Para o caso de tentarem colocar um id
        AccountC toAccount = newAccount.toCommand();
        try{
            AccountC created = commands.save(toAccount);
            AccountDTO toDTO = created.toDto();
            sender.send(toDTO, "create");
            return toDTO;
        }catch(Exception e){
            e.printStackTrace();
            throw new DuplicateAccountException();
        }
    }

    public AccountDTO updateAccount(Long accountId, AccountDTO newData) throws AccountNotFound {
        AccountC toUpdate = null;

        try {
            toUpdate = queries.findById(accountId).get().toCommand();
        } catch (NoSuchElementException e) {
            throw new AccountNotFound();
        }

        toUpdate.setBalance(newData.getBalance());
        toUpdate.setLimit(newData.getLimit());
        toUpdate.setUserId(newData.getUserId());
        toUpdate = commands.save(toUpdate);
        sender.send(toUpdate.toDto(), "update");
        return toUpdate.toDto();
    }

    public void deleteAccount(Long id) throws AccountNotFound {
        try {
            AccountDTO deleted = getAccountDTO(id);
            commands.deleteById(id);
            sender.send(deleted, "delete");
        } catch (EmptyResultDataAccessException e) {
            throw new AccountNotFound();
        }
    }

    public void transferFunds(AccountC origin, AccountC destination, Double amount)
            throws InsufficientFunds, AccountNotFound {
        if (!origin.allowTransaction(-amount)) {
            throw new InsufficientFunds();
        }

        origin.updateBalance(-amount);
        destination.updateBalance(amount);
        updateAccount(origin.getId(), origin.toDto());
        updateAccount(destination.getId(), destination.toDto());
    }

    public void withdraw(AccountC account, Double amount) throws InsufficientFunds, AccountNotFound {
        if (account.allowTransaction(amount)) {
            account.updateBalance(-amount);
            updateAccount(account.getId(), account.toDto());
        } else {
            throw new InsufficientFunds();
        }
    }

    public void deposit(AccountC account, Double amount) throws AccountNotFound {
        account.updateBalance(amount);
        updateAccount(account.getId(), account.toDto());
    }
}
