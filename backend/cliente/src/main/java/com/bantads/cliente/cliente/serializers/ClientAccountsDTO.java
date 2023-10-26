package com.bantads.cliente.cliente.serializers;

import java.io.Serializable;
import java.util.List;

public class ClientAccountsDTO implements Serializable {
  List<ClienteDTO> clientes;
  Object accounts;

  public ClientAccountsDTO() {
  }

  public List<ClienteDTO> getClientes() {
    return clientes;
  }

  public void setClientes(List<ClienteDTO> clientes) {
    this.clientes = clientes;
  }

  public Object getAccounts() {
    return accounts;
  }

  public void setAccounts(Object accounts) {
    this.accounts = accounts;
  }

}
