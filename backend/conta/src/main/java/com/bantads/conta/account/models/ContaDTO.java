package com.bantads.conta.conta.models;

import com.bantads.conta.conta.models.command.ContaC;
import com.bantads.conta.conta.models.query.ContaQ;
import com.bantads.conta.transaction.models.TransactionDTO;
import org.modelmapper.ModelMapper;

import java.io.Serializable;
import java.util.List;

public class ContaDTO implements Serializable {
    private Long id;
    private Long userId;
    private Double balance;
    private Double limit;
    private List<TransactionDTO> transactions;

    public ContaDTO() {
    }

    public ContaDTO(Long id, Long userId, Double balance, List<TransactionDTO> transactions, Double limit) {
        this.id = id;
        this.userId = userId;
        this.balance = balance;
        this.transactions = transactions;
        this.limit = limit;
    }

    public ContaC toCommand(){
        ModelMapper mapper = new ModelMapper();
        return mapper.map(this, ContaC.class);
    }

    public ContaQ toQuery(){
        ModelMapper mapper = new ModelMapper();
        return mapper.map(this, ContaQ.class);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public List<TransactionDTO> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<TransactionDTO> transactions) {
        this.transactions = transactions;
    }

    public Double getLimit() {
        return limit;
    }

    public void setLimit(Double limit) {
        this.limit = limit;
    }

}
