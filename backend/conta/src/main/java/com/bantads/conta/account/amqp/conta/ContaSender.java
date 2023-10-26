package com.bantads.conta.conta.amqp.conta;

import com.bantads.conta.conta.amqp.ContaTransfer;
import com.bantads.conta.conta.models.ContaDTO;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;

public class ContaSender {
    @Autowired
    private RabbitTemplate template;

    @Autowired
    private Queue contaQueue;

    public void send(ContaDTO conta, String action) {
        ContaTransfer dt = new ContaTransfer(conta, action);
        System.out.println("Queue name: " + this.contaQueue.getName());
        this.template.convertAndSend(this.contaQueue.getName(), dt);
    }
}
