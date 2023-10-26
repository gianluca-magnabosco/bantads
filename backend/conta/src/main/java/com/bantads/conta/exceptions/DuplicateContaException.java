package com.bantads.conta.exceptions;

public class DuplicateContaException extends BenignException {

    public DuplicateContaException() {
        super("Este usuário já possui uma conta");
    }

}
