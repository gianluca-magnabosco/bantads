package com.bantads.cliente.cliente.amqp;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import org.springframework.amqp.core.Queue;

public class ClienteProducer {
  @Autowired
  private RabbitTemplate template;

  @Autowired
  @Qualifier("cliente")
  private Queue queue;

  public void send(ClienteTransfer cliente) {
    this.template.convertAndSend(this.queue.getName(), cliente);
  }
}