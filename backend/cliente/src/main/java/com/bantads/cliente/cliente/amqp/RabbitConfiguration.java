package com.bantads.cliente.cliente.amqp;

import java.util.HashMap;
import java.util.Map;

import org.springframework.amqp.core.Queue;
import org.springframework.amqp.support.converter.DefaultClassMapper;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfiguration {

  @Bean
  @Qualifier("cliente")
  public Queue clientQueue() {
    System.out.println("Criando fila cliente");
    return new Queue("cliente");
  }

  @Bean
  @Qualifier("gerente-cliente")
  public Queue gerenteQueue() {
    System.out.println("Criando fila gerente-cliente");
    return new Queue("gerente-cliente");
  }

  @Bean
  public ClienteProducer sender() {
    return new ClienteProducer();
  }

  @Bean
  public ClienteReceiver receiver() {
    return new ClienteReceiver();
  }

  @Bean
  public GerenteProducer gerenteSender() {
    return new GerenteProducer();
  }

  @Bean
  public GerenteReceiver gerenteReceiver() {
    return new GerenteReceiver();
  }

  @Bean
  public DefaultClassMapper classMapper() {
    DefaultClassMapper classMapper = new DefaultClassMapper();
    Map<String, Class<?>> idClassMapping = new HashMap();
    classMapper.setTrustedPackages("*");
    idClassMapping.put("com.bantads.gerente.amqp.GerenteTransfer", GerenteTransfer.class);
    idClassMapping.put("com.bantads.account.account.amqp.ClienteTransfer", ClienteTransfer.class);
    idClassMapping.put("com.bantads.saga.amqp.ClienteTransfer", ClienteTransfer.class);
    classMapper.setIdClassMapping(idClassMapping);

    return classMapper;

  }

  @Bean
  public MessageConverter jsonMessageConverter() {
    Jackson2JsonMessageConverter converter = new Jackson2JsonMessageConverter();
    converter.setClassMapper(classMapper());

    return converter;
  }
}