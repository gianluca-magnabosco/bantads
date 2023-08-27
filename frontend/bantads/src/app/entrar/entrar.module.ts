import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './entrar.component';
import { LoginFormComponent } from './login-form';
import { CadastroFormComponent } from './cadastro-form';
import { HttpClientModule } from '@angular/common/http'
import { BuscaCEPService, CadastroService, LoginService, ValidationService } from './services';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    EntrarComponent,
    LoginFormComponent,
    CadastroFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    EntrarComponent,
    LoginFormComponent,
    CadastroFormComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  providers:[
    BuscaCEPService,
    ValidationService,
    LoginService,
    CadastroService,
  ]

})
export class EntrarModule { }
