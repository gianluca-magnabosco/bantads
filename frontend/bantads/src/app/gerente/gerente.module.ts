import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio';
import { ListarClientesComponent } from './listar-clientes';
import { DadosClienteComponent } from './dados-cliente';
import { ConsultarClienteComponent } from './consultar-cliente';
import { FooterModule } from '../footer';
import { NavbarComponent } from './navbar';
import { MatDividerModule } from '@angular/material/divider';
import { GerenteService } from './services';
import { RouterModule } from '@angular/router';
import { ValidationService } from '../shared/services';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localePt)

@NgModule({
  declarations: [
    InicioComponent,
    ListarClientesComponent,
    DadosClienteComponent,
    ConsultarClienteComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    NavbarComponent,
    MatDividerModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    GerenteService,
    ValidationService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ]
})
export class GerenteModule { }
