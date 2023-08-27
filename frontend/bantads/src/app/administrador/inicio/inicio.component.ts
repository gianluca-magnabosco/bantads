import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../services/administrador.service';

@Component({
  selector: 'admin-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  private gerentes: any;

  constructor(private administradorService: AdministradorService) { }

  ngOnInit(): void {
    this.gerentes = this.administradorService.getGerentes();
  }

  get listaGerentes() {
    return this.gerentes;
  }
}
