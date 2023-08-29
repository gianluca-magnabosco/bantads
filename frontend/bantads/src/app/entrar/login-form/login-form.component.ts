import { Component } from '@angular/core';
import { LoginService, ValidationService } from '../services';
import { Login } from 'src/app/shared';

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

  private login: Login = {
    email: "",
    password: "",
  };

  constructor(private validationService: ValidationService, private loginService: LoginService) { }

  realizarLogin(): void {
    this.loginService.login(this.login);
  }

  get email(): string {
    return this.login.email!;
  }

  set email(email: string) {
    this.login.email = email;
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
    return this.login.password!;
  }

  set password(password: string) {
    this.login.password = password;
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
    return (
      (this.email === "" || !this.email.match(/[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}/))
      || (this.password === "")
    );
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
