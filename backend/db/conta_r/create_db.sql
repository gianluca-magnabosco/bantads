CREATE DATABASE IF NOT EXISTS Conta
WITH ENCODING = 'UTF8';

USE Conta;

CREATE TABLE IF NOT EXISTS ContaCiente (
    ContaClienteID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    CPF VARCHAR(12) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS ContaGerente (
    ContaGerenteID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    CPF VARCHAR(12) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS TipoTransacao (
    TipoTransacaoID INT AUTO_INCREMENT PRIMARY KEY,
    Tipo ENUM('descrição', 'saque', 'transferência') NOT NULL,
);

CREATE TABLE IF NOT EXISTS HistoricoMovimentacoes (
    HistoricoMovimentacoesID INT AUTO_INCREMENT PRIMARY KEY,
    Data VARCHAR(255),
    TipoTransacao ENUM('depósito', 'saque', 'transferência'),
    ContaOrigem VARCHAR(255),
    ContaDestino VARCHAR(255),
    Valor VARCHAR(255)),
    FOREIGN KEY (tipoTransacao) REFERENCES TipoTransacao(Tipo)
);

CREATE TABLE IF NOT EXISTS Conta (
  ContaID INT AUTO_INCREMENT PRIMARY KEY,
  Numero VARCHAR(255),
  DataCriacao VARCHAR(255),
  Limite VARCHAR(255),
  ContaClienteID INT,
  ContaGerenteID INT,
  HistoricoMovimentacoesID INT,
  FOREIGN KEY (ContaClienteID) REFERENCES ContaCliente(ContaClienteID),
  FOREIGN KEY (ContaGerenteID) REFERENCES ContaGerente(ContaGerenteID),
  FOREIGN KEY (HistoricoMovimentacoesID) REFERENCES HistoricoMovimentacoes(HistoricoMovimentacoesID)
);
