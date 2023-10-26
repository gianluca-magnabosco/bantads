package br.ufpr.tads.dac.gerente.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record GerenteDTO(
        @NotBlank
        String Nome,
        @NotBlank
        @Email
        String Email,
        @NotBlank
        @Pattern(regexp = "\\d{3}\\.?\\d{3}\\.?\\d{3}\\-?\\d{2}")
        String CPF,
        @NotBlank
        String Telefone
) {
}
