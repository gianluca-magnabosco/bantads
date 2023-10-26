package com.bantads.cliente.cliente.serializers;

import java.io.Serializable;

public class AccountDTO implements Serializable {
  private Long id;
  private Long userId;
  private Double balance;
  private Double limit;

  public AccountDTO() {
  }

  public AccountDTO(Long id, Long userId, Double balance, Double limit) {
    this.id = id;
    this.userId = userId;
    this.balance = balance;
    this.limit = limit;
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

  public Double getLimit() {
    return limit;
  }

  public void setLimit(Double limit) {
    this.limit = limit;
  }

}
