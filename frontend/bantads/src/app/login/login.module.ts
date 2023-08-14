import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form';
import { CadastroFormComponent } from './cadastro-form';



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    CadastroFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    LoginFormComponent,
    CadastroFormComponent
  ]
})
export class LoginModule { }
