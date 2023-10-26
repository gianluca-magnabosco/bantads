package com.bantads.conta.conta.models.command;

import com.bantads.conta.conta.models.contaDTO;
import com.bantads.conta.conta.models.query.contaQ;
import com.bantads.conta.transaction.models.command.TransactionC;
import org.modelmapper.ModelMapper;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "contas")
public class ContaC implements Serializable {
    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "balance")
    private Double balance;

    @Column(name = "acc_limit")
    @NotNull(message = "Limite da conta é obrigatório!")
    private Double limit;

    @OneToMany(mappedBy = "conta", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<TransactionC> transactions;

    public ContaC() {
    }

    public ContaC(Long id, Long userId, Double balance, List<TransactionC> transactions, Double limit) {
        this.id = id;
        this.userId = userId;
        this.balance = balance;
        this.transactions = transactions;
        this.limit = limit;
    }

    public ContaDTO toDto() {
        ModelMapper mapper = new ModelMapper();
        return mapper.map(this, ContaDTO.class);
    }

    public ContaQ toQuery(){
        ModelMapper mapper = new ModelMapper();
        return mapper.map(this, ContaQ.class);
    }

    public boolean allowTransaction(Double amount) {
        if (limit + balance < amount) {
            return false;
        }

        return true;
    }

    public void updateBalance(Double amount) {
        this.balance += amount;
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

    public static Long getSerialversionuid() {
        return serialVersionUID;
    }

    public List<TransactionC> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<TransactionC> transactions) {
        this.transactions = transactions;
    }

    public Double getLimit() {
        return limit;
    }

    public void setLimit(Double limit) {
        this.limit = limit;
    }

}
