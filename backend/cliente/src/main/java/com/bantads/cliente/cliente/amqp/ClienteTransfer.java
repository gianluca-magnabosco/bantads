package com.bantads.cliente.cliente.amqp;

import java.io.Serializable;

import com.bantads.cliente.cliente.serializers.ClienteDTO;

public class ClienteTransfer implements Serializable {
  ClienteDTO cliente;
  String action;
  String error;

  public ClienteTransfer() {
  }

  public ClienteTransfer(ClienteDTO cliente, String action) {
    this.cliente = cliente;
    this.action = action;
  }

  public ClienteDTO getCliente() {
    return cliente;
  }

  public void setCliente(ClienteDTO cliente) {
    this.cliente = cliente;
  }

  public String getAction() {
    return action;
  }

  public void setAction(String action) {
    this.action = action;
  }

  public String getError() {
    return error;
  }

  public void setError(String error) {
    this.error = error;
  }

}
