package com.bantads.conta.exceptions;

public class CustomerNotFound extends BenignException {

    public CustomerNotFound() {
        super("Cliente não encontrado");
    }

}
