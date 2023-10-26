package br.ufpr.tads.dac.gerente.Repository;

import br.ufpr.tads.dac.gerente.model.GerenteModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GerenteRepository extends JpaRepository<GerenteModel, Long> {
}
