package br.ufpr.tads.dac.gerente.model;

import br.ufpr.tads.dac.gerente.DTO.GerenteDTO;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity(name = "Gerente")
@Table(name = "DadosGerente")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "GerenteID")
public class GerenteModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long GerenteID;
    private String Nome;
    private String Email;
    private String CPF;
    private String Telefone;

    public GerenteModel(GerenteDTO dados){
        this.Nome = dados.Nome();
        this.Email = dados.Email();
        this.CPF = dados.CPF();
        this.Telefone = dados.Telefone();
    }
}
