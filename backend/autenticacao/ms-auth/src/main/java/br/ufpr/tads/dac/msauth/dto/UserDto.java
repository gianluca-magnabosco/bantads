package br.ufpr.tads.dac.msauth.dto;

import br.ufpr.tads.dac.msauth.model.UserModel;
import br.ufpr.tads.dac.msauth.model.enums.UserRole;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class UserDto {
    
    @NotBlank
    private String nome;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private UserRole role;

    public UserDto(String nome, String email, UserRole role) {
        this.nome = nome;
        this.email = email;
        this.role = role;
    }

    public UserDto(UserModel userModel) {
        this.nome = userModel.getNome();
        this.email = userModel.getEmail();
        this.role = userModel.getRole();
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public UserRole getRole() {
        return role;
    }
}
