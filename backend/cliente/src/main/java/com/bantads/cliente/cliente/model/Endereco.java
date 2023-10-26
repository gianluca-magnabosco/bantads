package com.bantads.cliente.cliente.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "Endereco")
public class Endereco implements Serializable {
    
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "EnderecoID")
  private long EnderecoID;
  @Column(name = "ClienteID")
  private int ClienteID;
  @Column(name = "TipoEndereco")
  private String TipoEndereco;
  @Column(name = "Logradouro")
  private String Logradouro;
  @Column(name = "Numero")
  private int Numero;
  @Column(name = "Complemento")
  private String Complemento;
  @Column(name = "CEP")
  private String CEP;
  @Column(name = "Cidade")
  private String Cidade;
  @Column(name = "Estado")
  private String Estado;
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "ClienteID", referencedColumnName = "ClienteID")

  public long getId() {
    return EnderecoID;
  }

  public void setId(long EnderecoID) {
    this.EnderecoID = EnderecoID;
  }
  
  public int getNumero() {
    return Numero;
  }

  public void setNumero(int Numero) {
    this.Numero = Numero;
  }
  
  public String getTipoEndereco() {
    return TipoEndereco;
  }

  public void setTipoEndereco(String TipoEndereco) {
    this.TipoEndereco = TipoEndereco;
  }
  
  public String getComplemento() {
    return Complemento;
  }

  public void setComplemento(String Complemento) {
    this.Complemento = Complemento;
  }

  public String getLogradouro() {
    return Logradouro;
  }

  public void setLogradouro(String Logradouro) {
    this.Logradouro = Logradouro;
  }

  public String getCep() {
    return CEP;
  }

  public void setCep(String CEP) {
    this.CEP = CEP;
  }

  public String getCidade() {
    return Cidade;
  }

  public void setCidade(String Cidade) {
    this.Cidade = Cidade;
  }

  public String getEstado() {
    return Estado;
  }

  public void setEstado(String Estado) {
    this.Estado = Estado;
  }

}
