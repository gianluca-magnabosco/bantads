import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent as ClienteInicio } from './cliente/inicio/inicio.component';
import { DepositoComponent as ClienteDeposito } from './cliente/deposito/deposito.component';
import { SaqueComponent as ClienteSaque } from './cliente/saque/saque.component';
import { TransferenciaComponent as ClienteTransferencia} from './cliente/transferencia/transferencia.component';
import { AlterarComponent as ClienteAlterar} from './cliente/alterar/alterar.component';

import { InicioComponent as GerenteInicio } from './gerente/inicio/inicio.component';
import { ConsultaComponent as GerenteConsulta } from './gerente/consulta/consulta.component';
import { DadosClienteComponent as GerenteDadosCliente } from './gerente/dadoscliente/dadoscliente.component';


import { InicioComponent as AdminInicio } from './administrador/inicio/inicio.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/entrar',
    pathMatch: 'full'
  },
  {
    path: 'entrar',
    component: EntrarComponent
  },
  {
    path: 'cliente/inicio',
    component: ClienteInicio
  },
  {
    path: 'gerente/inicio',
    component: GerenteInicio
  },
  {
    path: 'gerente/consulta',
    component: GerenteConsulta
  },
  {
    path: 'gerente/dadoscliente',
    component: GerenteDadosCliente
  },
  
  {
    path: 'admin/inicio',
    component: AdminInicio
  },
  {
    path: 'cliente/deposito',
    component: ClienteDeposito
  },
  {
    path: 'cliente/saque',
    component: ClienteSaque
  },
  {
    path: 'cliente/transferencia',
    component: ClienteTransferencia
  },
  {
    path: 'cliente/alterar',
    component: ClienteAlterar
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }