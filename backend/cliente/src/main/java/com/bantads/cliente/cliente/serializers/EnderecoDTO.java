package com.bantads.cliente.cliente.serializers;

import java.io.Serializable;

public class EnderecoDTO implements Serializable {
  private Long EnderecoID;
  private Long ClienteID;
  private String TipoEndereco;
  private String Logradouro;
  private int Numero;
  private String Complemento;
  private String CEP;
  private String Cidade;
  private String Estado;

  public Long getEnderecoId() {
    return EnderecoID;
  }

  public void setEnderecoId(Long EnderecoID) {
    this.EnderecoID = EnderecoID;
  }
  
  public Long getClienteId() {
    return ClienteID;
  }

  public void setClienteId(Long ClienteID) {
    this.ClienteID = ClienteID;
  }
  
  public String getTipoEndereco() {
    return TipoEndereco;
  }

  public void setTipoEndereco(String TipoEndereco) {
    this.TipoEndereco = TipoEndereco;
  }
  
  public String getLogradouro() {
    return Logradouro;
  }

  public void setLogradouro(String Logradouro) {
    this.Logradouro = Logradouro;
  }
  
  public int getNumero() {
    return Numero;
  }

  public void setNumero(int Numero) {
    this.Numero = Numero;
  }

  public String getComplemento() {
    return Complemento;
  }

  public void setComplemento(String Complemento) {
    this.Complemento = Complemento;
  }

  public String getCEP() {
    return CEP;
  }

  public void setCEP(String CEP) {
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
