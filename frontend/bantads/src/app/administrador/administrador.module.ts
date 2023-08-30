import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio';
import { FooterModule } from '../footer';
import { NavbarComponent } from './navbar';
import { MatDividerModule } from '@angular/material/divider';
import { AdministradorService } from './services';
import { ListarGerentesComponent } from './listar-gerentes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirGerenteComponent } from './inserir-gerente';
import { EditarGerenteComponent } from './editar-gerente';


@NgModule({
  declarations: [
    InicioComponent,
    ListarGerentesComponent,
    InserirGerenteComponent,
    EditarGerenteComponent,
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
    AdministradorService,
  ]
})
export class AdministradorModule { }
