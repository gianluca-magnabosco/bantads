package com.bantads.cliente.cliente.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "Cliente")
public class Cliente implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ClienteID")
  private long ClienteID;
  @Column(name = "Nome")
  private String Nome;
  @Column(name = "CPF")
  private String CPF;
  @Column(name = "Email")
  private String Email;
  @Column(name = "Telefone")
  private String Telefone;
  @Column(name = "Salario")
  private int Salario = 0;

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

  public long getId() {
    return ClienteID;
  }

  public void setId(long ClienteID) {
    this.ClienteID = ClienteID;
  }

  public int getSalario() {
    return Salario;
  }

  public void setSalario(int Salario) {
    this.Salario = Salario;
  }

}
