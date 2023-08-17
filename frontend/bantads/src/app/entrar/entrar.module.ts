import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './entrar.component';
import { LoginFormComponent } from './login-form';
import { CadastroFormComponent } from './cadastro-form';


@NgModule({
  declarations: [
    EntrarComponent,
    LoginFormComponent,
    CadastroFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EntrarComponent,
    LoginFormComponent,
    CadastroFormComponent
  ]
})
export class EntrarModule { }
