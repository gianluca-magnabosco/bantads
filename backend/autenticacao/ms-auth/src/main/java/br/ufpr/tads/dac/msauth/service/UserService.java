package br.ufpr.tads.dac.msauth.service;

import br.ufpr.tads.dac.msauth.model.UserModel;
import br.ufpr.tads.dac.msauth.respository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserModel save(UserModel userModel) {
        return userRepository.save(userModel);
    }

    public Optional<UserModel> findById(UUID id) {
        return userRepository.findById(id);
    }

    public Optional<UserModel> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<UserModel> findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    public void delete(UserModel userModel) {
        userRepository.delete(userModel);
    }

}

