package com.bantads.cliente.cliente.amqp;

import org.modelmapper.ModelMapper;
import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;

import com.bantads.cliente.cliente.model.Cliente;
import com.bantads.cliente.cliente.repositories.ClienteRepository;
import com.bantads.cliente.cliente.serializers.ClienteDTO;
import com.bantads.cliente.cliente.serializers.EnderecoDTO;
import com.bantads.cliente.cliente.utils.ValidarCpf;

@RabbitListener(queues = "Cliente")
public class ClienteReceiver {

  @Autowired
  private RabbitTemplate template;

  @Autowired
  private ClienteRepository repo;

  @Autowired
  private ModelMapper mapper;

  @Autowired
  private ClienteProducer sender;

  @Autowired
  private GerenteProducer gerenteSender;

  @RabbitHandler
  public ClienteTransfer receive(@Payload ClienteTransfer clienteTransfer) {
    System.out.println("Recebendo cliente " + clienteTransfer.getCliente());
    if (clienteTransfer.getAction().equals("get-cliente")) {
      Cliente cliente = repo.findById(clienteTransfer.getCliente().getId()).get();

      ModelMapper modelMapper = new ModelMapper();
      ClienteDTO clienteDTO = modelMapper.map(cliente, ClienteDTO.class);

      clienteTransfer.setCliente(clienteDTO);
      clienteTransfer.setAction("return-cliente");

      sender.send(clienteTransfer);
      return clienteTransfer;
    } else if (clienteTransfer.getAction().equals("cliente-register")) 
    {

        ClienteDTO cliente = clienteTransfer.getCliente();

        if (cliente.getNome() == null || cliente.getCpf() == null) {
          clienteTransfer.setError("Dados do cliente inválidos");

          clienteTransfer.setAction("cliente-failed");

          this.template.convertAndSend("saga", clienteTransfer);
        }

        if (!ValidarCpf.isCpfValid(cliente.getCpf())) {
          clienteTransfer.setError("CPF Inálido!");
          clienteTransfer.setAction("cliente-failed");

          return clienteTransfer;
        }

        try {
            
          Cliente clienteObj = repo.save(mapper.map(cliente, Cliente.class));

          cliente.setId(clienteObj.getId());

          // Rabbit para criar a autenticação do usuário
          // sender.send(cliente);

          GerenteTransfer gt = new GerenteTransfer();

          gt.setAction("create-cliente");
          gt.setCliente(cliente.getId());

          gerenteSender.send(gt);

        } catch (Exception e) {

          clienteTransfer.setError("Erro interno ao criar cliente!");
          clienteTransfer.setAction("cliente-failed");

          this.template.convertAndSend("saga", clienteTransfer);
          return clienteTransfer;
        }

        clienteTransfer.setAction("cliente-ok");

        return clienteTransfer;

    } else if (clienteTransfer.getAction().equals("cliente-delete")) 
    {
      ClienteDTO cliente = clienteTransfer.getCliente();

      Cliente clienteObj = repo.findById(cliente.getId()).get();

      if (clienteObj != null) {
        repo.delete(clienteObj);

        clienteTransfer.setAction("cliente-deleted");
        // this.template.convertAndSend("saga", clienteTransfer);
        return clienteTransfer;
      }

      System.out.println("Cliente não encontrado");

      return clienteTransfer;  
    }

    System.out.println("Ação recebida não reconhecida: " + clienteTransfer.getAction());

    return null;
  }
}