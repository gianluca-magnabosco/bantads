package br.ufpr.tads.dac.msauth.model;

import br.ufpr.tads.dac.msauth.model.enums.UserRole;
import jakarta.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document("User")
public class UserModel implements Serializable {

    @Id
    private String id;
    private String nome;
    private String email;
    private String password;
    private UserRole role;

    public UserModel() {}

    public UserModel(String nome, String email, String password, UserRole role) {
        this.nome = nome;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "UserModel{" +
                "id='" + id + '\'' +
                ", nome='" + nome + '\'' +
                ", password='" + password + '\'' +
                ", role=" + role +
                '}';
    }
}
