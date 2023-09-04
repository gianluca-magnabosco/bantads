import { NgModule, LOCALE_ID } from '@angular/core';
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
import { ClienteService, ContaService } from './services';
import { SaldoComponent } from './saldo/saldo.component';
import { EditarComponent } from './meu-perfil/editar/editar.component';
import { VisualizarComponent } from './meu-perfil/visualizar/visualizar.component';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localePt)



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
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    ValidationService,
    ContaService,
    ClienteService,
  ]
})
export class ClienteModule { }
