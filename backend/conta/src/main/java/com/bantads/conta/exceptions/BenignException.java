package com.bantads.conta.exceptions;

public class BenignException extends Exception {

    public BenignException() {
        super();
    }

    public BenignException(String message) {
        super(message);
    }

    public BenignException(String message, Throwable cause) {
        super(message, cause);
    }

    public BenignException(Throwable cause) {
        super(cause);
    }

    protected BenignException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
