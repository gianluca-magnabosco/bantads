package com.bantads.conta.conta.amqp;

import com.bantads.conta.conta.models.ContaDTO;
import com.google.gson.Gson;

import java.io.Serializable;

public class ContaTransfer implements Serializable {
    private ContaDTO conta;
    private String action;

    public ContaTransfer() {
        System.out.println("Inicializando um ContaTransfer vazio");
    }

    public ContaTransfer(ContaDTO conta, String action) {
        this.conta = conta;
        this.action = action;
        System.out.println("Inicializando um ContaTransfer com dados");
    }

    public String toJson() {
        return new Gson().toJson(this);
    }

    public static ContaTransfer fromJson(String json) {
        return new Gson().fromJson(json, ContaTransfer.class);
    }

    public ContaDTO getConta() {
        return conta;
    }

    public void setConta(ContaDTO conta) {
        this.conta = conta;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

}
