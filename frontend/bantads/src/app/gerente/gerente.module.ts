import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { FooterModule } from '../footer/footer.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatDividerModule } from '@angular/material/divider';
import { GerenteService } from './services/gerente.service';


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
    GerenteService,
  ]
})
export class GerenteModule { }
