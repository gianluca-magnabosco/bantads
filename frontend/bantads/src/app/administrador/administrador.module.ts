import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { FooterModule } from '../footer/footer.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatDividerModule } from '@angular/material/divider';
import { AdministradorService } from './services/administrador.service';


@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    FooterModule,
    NavbarComponent,
    MatDividerModule,
  ],
  providers: [
    AdministradorService,
  ]
})
export class AdministradorModule { }
