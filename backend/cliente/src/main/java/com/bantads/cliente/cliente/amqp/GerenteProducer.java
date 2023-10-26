package com.bantads.cliente.cliente.amqp;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.amqp.core.Queue;

public class GerenteProducer {
  @Autowired
  private RabbitTemplate template;

  @Autowired
  @Qualifier("gerente-cliente")
  private Queue queue;

  public void send(GerenteTransfer gerente) {
    this.template.convertAndSend("gerente-cliente", gerente);
  }
}