package com.bantads.cliente.cliente.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bantads.cliente.cliente.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

  // Cliente findByEmail(String email);

  List<Cliente> findByGerente(int gerente);

}
