import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio';
import { DepositoComponent } from './deposito';
import { SaqueComponent } from './saque';
import { TransferenciaComponent } from './transferencia';
import { MeuPerfilComponent } from './meu-perfil';
import { FooterModule } from '../footer';
import { NavbarComponent } from './navbar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ValidationService } from '../shared/services';
import { ContaService } from './services';




@NgModule({
  declarations: [
    InicioComponent,
    DepositoComponent,
    SaqueComponent,
    TransferenciaComponent,
    MeuPerfilComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    FormsModule,
    NavbarComponent,
    RouterModule
  ],
  providers: [
    ValidationService,
    ContaService,
  ]
})
export class ClienteModule { }
