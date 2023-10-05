package br.ufpr.tads.dac.msauth.respository;

import br.ufpr.tads.dac.msauth.model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends MongoRepository<UserModel, UUID> {

    Optional<UserModel> findByEmail(String email);
    Optional<UserModel> findByEmailAndPassword(String email, String password);
    boolean existsByEmail(String email);

}
