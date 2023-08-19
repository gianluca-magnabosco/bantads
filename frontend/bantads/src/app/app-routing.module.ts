import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent as ClienteInicio } from './cliente/inicio/inicio.component';
import { InicioComponent as GerenteInicio } from './gerente/inicio/inicio.component';
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
    path: 'admin/inicio',
    component: AdminInicio
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
