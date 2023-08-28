import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio';
import { DepositoComponent } from './deposito';
import { SaqueComponent } from './saque';
import { TransferenciaComponent } from './transferencia';
import { AlterarComponent } from './alterar';
import { FooterModule } from '../footer';
import { NavbarComponent } from './navbar';




@NgModule({
  declarations: [
    InicioComponent,
    DepositoComponent,
    SaqueComponent,
    TransferenciaComponent,
    AlterarComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    NavbarComponent
  ]
})
export class ClienteModule { }