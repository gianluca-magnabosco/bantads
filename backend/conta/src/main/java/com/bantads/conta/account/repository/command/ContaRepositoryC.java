package com.bantads.conta.conta.repository.command;

import com.bantads.conta.conta.models.command.ContaC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContaRepositoryC extends JpaRepository<ContaC, Long> {
}
