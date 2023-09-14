import { NgModule, LOCALE_ID } from '@angular/core';
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
import { RelatorioClientesComponent } from './relatorio-clientes';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { ValidationService } from '../shared/services';
registerLocaleData(localePt)


@NgModule({
  declarations: [
    InicioComponent,
    ListarGerentesComponent,
    InserirGerenteComponent,
    EditarGerenteComponent,
    RelatorioClientesComponent,
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
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    AdministradorService,
    ValidationService,
  ]
})
export class AdministradorModule { }
