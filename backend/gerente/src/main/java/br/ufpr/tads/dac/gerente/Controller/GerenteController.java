package br.ufpr.tads.dac.gerente.Controller;

import br.ufpr.tads.dac.gerente.DTO.GerenteDTO;
import br.ufpr.tads.dac.gerente.Repository.GerenteRepository;
import br.ufpr.tads.dac.gerente.model.GerenteModel;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cliente/pendentes")
public class GerenteController {
    @Autowired
    private GerenteRepository repository;
    @PostMapping
    @Transactional
    public void cadastrar(@RequestBody @Valid GerenteDTO dados){
        repository.save(new GerenteModel(dados));
    }
}
