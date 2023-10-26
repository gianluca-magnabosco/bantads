package com.bantads.cliente.cliente.serializers;

import java.io.Serializable;

public class ClienteDTO implements Serializable {
  private Long ClienteID;
  private String Nome;
  private String CPF;
  private String Email;
  private String Telefone;
  private int Salario;

  public String getEmail() {
    return Email;
  }

  public void setEmail(String Email) {
    this.Email = Email;
  }

  public String getNome() {
    return Nome;
  }

  public void setNome(String Nome) {
    this.Nome = Nome;
  }

  public String getCpf() {
    return CPF;
  }

  public void setCpf(String CPF) {
    this.CPF = CPF;
  }

  public Long getId() {
    return ClienteID;
  }

  public void setId(Long ClienteID) {
    this.ClienteID = ClienteID;
  }

  public int getSalario() {
    return Salario;
  }

  public void setSalario(int Salario) {
    this.Salario = Salario;
  }

}
