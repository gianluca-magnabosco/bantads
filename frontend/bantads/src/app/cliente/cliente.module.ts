import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { DepositoComponent } from './deposito/deposito.component';
import { SaqueComponent } from './saque/saque.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { AlterarComponent } from './alterar/alterar.component';
import { FooterModule } from '../footer/footer.module';
import { NavbarComponent } from './navbar/navbar.component';




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