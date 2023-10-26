package com.bantads.conta.conta.repository.query;

import com.bantads.conta.conta.models.query.ContaQ;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContaRepositoryQ extends JpaRepository<ContaQ, Long> {
    public Optional<ContaQ> findByUserId(Long userId);

}
