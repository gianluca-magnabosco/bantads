package com.bantads.cliente.cliente.amqp;

import java.io.Serializable;

import com.bantads.cliente.cliente.serializers.GerenteDTO;

public class GerenteTransfer implements Serializable {
  GerenteDTO gerente;
  String action;
  Long cliente;

  public GerenteTransfer() {
  }

  public GerenteTransfer(GerenteDTO gerente, String action) {
    this.gerente = gerente;
    this.action = action;
  }

  public GerenteDTO getGerente() {
    return gerente;
  }

  public void setGerente(GerenteDTO gerente) {
    this.gerente = gerente;
  }

  public String getAction() {
    return action;
  }

  public void setAction(String action) {
    this.action = action;
  }

  public Long getCliente() {
    return cliente;
  }

  public void setCliente(Long cliente) {
    this.cliente = cliente;
  }

}
