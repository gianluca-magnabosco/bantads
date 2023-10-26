package com.bantads.conta.conta.amqp.conta;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ContaQueueConfiguration {

    @Bean
    public Queue contaQueue() {
        return new Queue("conta");
    }

    @Bean
    public ContaListener aReceiver() {
        return new ContaListener();
    }

    @Bean
    public ContaSender aSender() {
        return new ContaSender();
    }
}
