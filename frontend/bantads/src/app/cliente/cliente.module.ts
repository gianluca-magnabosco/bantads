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
import { SaldoComponent } from './saldo/saldo.component';
import { EditarComponent } from './meu-perfil/editar/editar.component';
import { VisualizarComponent } from './meu-perfil/visualizar/visualizar.component';




@NgModule({
  declarations: [
    InicioComponent,
    DepositoComponent,
    SaqueComponent,
    TransferenciaComponent,
    MeuPerfilComponent,
    SaldoComponent,
    EditarComponent,
    VisualizarComponent
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
