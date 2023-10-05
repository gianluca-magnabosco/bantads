package br.ufpr.tads.dac.msauth.rest;

import br.ufpr.tads.dac.msauth.dto.LoginDto;
import br.ufpr.tads.dac.msauth.dto.UserDto;
import br.ufpr.tads.dac.msauth.model.UserModel;
import br.ufpr.tads.dac.msauth.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/auth")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody @Valid LoginDto loginDto) {
        Optional<UserModel> optionalUserModel = userService.findByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword());

        return optionalUserModel.map(userModel -> ResponseEntity.ok().body(new UserDto(userModel))).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
