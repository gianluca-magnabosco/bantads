import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  
  showPassword: boolean = false;
  isInvalidEmail: boolean = false;

  email: string = '';
  password: string = '';


  isButtonDisabled(): boolean {
    return this.email === '' || this.password === ''|| this.isInvalidEmail;
  }

  validateEmail(): void {
    this.isInvalidEmail = !this.email.includes('@');
  }  

}