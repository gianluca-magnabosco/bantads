import { Component } from '@angular/core';
import { LoginService, ValidationService } from '../services';
import { LoginDTO } from '../dtos/login.dto';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  private emailBlurred: boolean = false;
  private emailValid: boolean = false;
  private emailError: string = "";

  private passwordBlurred: boolean = false;
  private passwordValid: boolean = false;
  private passwordShown: boolean = false;
  private passwordError: string = "";

  private loginDTO: LoginDTO = {
    email: "",
    password: ""
  };

  constructor(private validationService: ValidationService, private loginService: LoginService) { }

  login(): void {
    this.loginService.login(this.loginDTO);
  }

  get email(): string {
    return this.loginDTO.email;
  }

  set email(email: string) {
    this.loginDTO.email = email;
  }

  get isEmailValid(): boolean {
    return this.emailValid;
  }

  get emailErrorText(): string {
    return this.emailError;
  }

  get emailBeenBlurred(): boolean {
    return this.emailBlurred;
  }

  get password(): string {
    return this.loginDTO.password;
  }

  set password(password: string) {
    this.loginDTO.password = password;
  }

  get isPasswordValid(): boolean {
    return this.passwordValid;
  }

  get passwordErrorText(): string {
    return this.passwordError;
  }

  get passwordBeenBlurred(): boolean {
    return this.passwordBlurred;
  }

  get showPassword(): boolean {
    return this.passwordShown;
  }

  togglePasswordShown(): void {
    this.passwordShown = !this.passwordShown;
  }

  setEmailBeenBlurred(): void {
    this.emailBlurred = true;
    this.validateEmail();
  }

  setPasswordBeenBlurred(): void {
    this.passwordBlurred = true;
    this.validatePassword();
  }

  isButtonDisabled(): boolean {
    return (!this.isPasswordValid || !this.isEmailValid);
  }

  validateEmail(): void {
    let result = this.validationService.validateEmail(this.email, this.emailBeenBlurred);

    switch (result) {
      case "vazio": {
        this.emailValid = false;
        this.emailError = "Insira seu e-mail!";
        return;
      }

      case "inválido": {
        this.emailValid = false;
        this.emailError = "Insira um e-mail válido!";
        return;
      }

      default: {
        this.emailValid = true;
        this.emailError = "";
        return;
      }
    }
  }

  validatePassword(): void {
    let result = this.validationService.validatePassword(this.password, this.passwordBeenBlurred);

    switch (result) {
      case "vazio": {
        this.passwordValid = false;
        this.passwordError = "Insira sua senha!";
        return;
      }

      default: {
        this.passwordValid = true;
        this.passwordError = "";
        return;
      }
    }
  }
}
