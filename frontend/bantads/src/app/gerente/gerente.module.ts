import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio';
import { ConsultaComponent } from './consulta';
import { DadosClienteComponent } from './dadoscliente';
import { FooterModule } from '../footer';
import { NavbarComponent } from './navbar';
import { MatDividerModule } from '@angular/material/divider';
import { GerenteService } from './services';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    InicioComponent,
    ConsultaComponent,
    DadosClienteComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    NavbarComponent,
    MatDividerModule,
    RouterModule,
  ],
  providers: [
    GerenteService,
  ]
})
export class GerenteModule { }
