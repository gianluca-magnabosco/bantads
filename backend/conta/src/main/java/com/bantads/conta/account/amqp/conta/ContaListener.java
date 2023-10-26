package com.bantads.conta.conta.amqp.conta;

import com.bantads.conta.conta.amqp.ContaTransfer;
import com.bantads.conta.conta.models.query.ContaQ;
import com.bantads.conta.conta.repository.query.ContaRepositoryQ;
import com.bantads.conta.conta.services.ContaServices;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class ContaListener {
    @Autowired
    private ContaRepositoryQ viewDatabase;

    @Autowired
    private ContaServices service;

    @RabbitListener(queues = "conta")
    public void receive(@Payload ContaTransfer dt) {
        System.out.println("[ContaS] Ação executada: " + dt.getAction());
        switch (dt.getAction()) {
            case "create":
            case "update":
                ContaQ saved = viewDatabase.save(dt.getConta().toQuery());
                System.out.println("Operação create/update concluida: " + saved.getId());
                break;
            case "delete":
                viewDatabase.delete(dt.getConta().toQuery());
                System.out.println("Operação delete concluida: " + dt.getConta().getId());
                break;
        }
    }
}
