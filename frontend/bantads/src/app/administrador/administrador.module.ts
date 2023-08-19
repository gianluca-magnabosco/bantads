import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { FooterModule } from '../footer/footer.module';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    NavbarComponent
  ]
})
export class AdministradorModule { }
