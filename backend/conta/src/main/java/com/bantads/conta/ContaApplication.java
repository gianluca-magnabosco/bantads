package com.bantads.conta;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.modelmapper.ModelMapper;

@EnableScheduling
@SpringBootApplication
public class ContaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ContaApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
}
