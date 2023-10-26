package com.bantads.cliente.cliente.amqp;

import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;

import com.bantads.cliente.cliente.model.Cliente;
import com.bantads.cliente.cliente.repositories.ClienteRepository;

@RabbitListener(queues = "gerente-cliente")
public class GerenteReceiver {

  @Autowired
  private ClienteRepository repo;

  @RabbitHandler
  public void receive(@Payload GerenteTransfer gerenteTransfer) {
    System.out.println("Recebendo gerente " + gerenteTransfer.getGerente());
    if (gerenteTransfer.getAction().equals("set-gerente")) {
      Cliente cliente = repo.findById(gerenteTransfer.getCliente()).get();

      //cliente.setGerente(gerenteTransfer.getGerente().getId());
      repo.save(cliente);
    }
  }
}