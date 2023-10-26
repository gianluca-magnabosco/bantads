package com.bantads.cliente.cliente.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bantads.cliente.cliente.model.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Long> {

  // Cliente findByEmail(String email);

}
