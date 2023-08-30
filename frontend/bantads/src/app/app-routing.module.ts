import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntrarComponent } from './entrar/entrar.component';

import { InicioComponent as ClienteInicio } from './cliente/inicio/inicio.component';
import { DepositoComponent as ClienteDeposito } from './cliente/deposito/deposito.component';
import { SaqueComponent as ClienteSaque } from './cliente/saque/saque.component';
import { TransferenciaComponent as ClienteTransferencia } from './cliente/transferencia/transferencia.component';
import { MeuPerfilComponent as ClienteMeuPerfil } from './cliente/meu-perfil/meu-perfil.component';

import { InicioComponent as GerenteInicio } from './gerente/inicio/inicio.component';
import { ListarClientesComponent as GerenteListarClientes } from './gerente/listar-clientes/listar-clientes.component';
import { DadosClienteComponent as GerenteDadosCliente } from './gerente/dados-cliente/dados-cliente.component';
import { ConsultarClienteComponent as GerenteConsultarCliente } from './gerente/consultar-cliente/consultar-cliente.component';

import { InicioComponent as AdminInicio } from './administrador/inicio/inicio.component';
import { ListarGerentesComponent as AdminListarGerentes } from './administrador/listar-gerentes/listar-gerentes.component';
import { InserirGerenteComponent as AdminInserirGerente } from './administrador/inserir-gerente/inserir-gerente.component';
import { EditarGerenteComponent as AdminEditarGerente } from './administrador/editar-gerente/editar-gerente.component';


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
    path: 'cliente',
    redirectTo: '/cliente/inicio',
    pathMatch: 'full'
  },
  {
    path: 'cliente/inicio',
    component: ClienteInicio
  },
  {
    path: 'cliente/meu-perfil',
    component: ClienteMeuPerfil
  },
  {
    path: 'cliente/depositar',
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
  // {
  //   path: 'cliente/extrato',
  //   component: ClienteExtrato
  // },


  {
    path: 'gerente',
    redirectTo: '/gerente/inicio',
    pathMatch: 'full'
  },
  {
    path: 'gerente/inicio',
    component: GerenteInicio
  },
  {
    path: 'gerente/listar-clientes',
    component: GerenteListarClientes
  },
  {
    path: 'gerente/consultar-cliente',
    component: GerenteConsultarCliente
  },
  // {
    //   path: 'gerente/melhores-clientes',
    //   component: GerenteMelhoresClientes
    // },
  {
    path: 'gerente/dados-cliente',
    component: GerenteDadosCliente
  },


  {
    path: 'admin',
    redirectTo: '/admin/inicio',
    pathMatch: 'full'
  },
  {
    path: 'admin/inicio',
    component: AdminInicio
  },
  // {
  //   path: 'admin/relatorio-clientes',
  //   component: AdminRelatorioClientes
  // },
  {
    path: 'admin/listar-gerentes',
    component: AdminListarGerentes
  },
  {
    path: 'admin/inserir-gerente',
    component: AdminInserirGerente
  },
  {
    path: 'admin/editar-gerente/:id',
    component: AdminEditarGerente
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
