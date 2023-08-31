import { NgModule } from '@angular/core';
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
  ]
})
export class GerenteModule { }
