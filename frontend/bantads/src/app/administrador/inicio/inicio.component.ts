import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../services/administrador.service';
import { GerenteDashboard } from 'src/app/shared';

@Component({
  selector: 'admin-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  private gerentes!: GerenteDashboard[];

  constructor(private administradorService: AdministradorService) { }

  ngOnInit(): void {
    this.gerentes = this.administradorService.getDashboardGerentes();
    this.sortData();
  }

  get listaGerentes() {
    return this.gerentes;
  }

  sortKey: keyof GerenteDashboard = "nome";
  sortAsc = false;

  sortData(key: keyof GerenteDashboard = this.sortKey): void {
    if (key === this.sortKey) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
      this.sortKey = key;
    }

    this.gerentes.sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === 'string' && typeof valB === 'string') {
        return this.sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      } else if (typeof valA === 'number' && typeof valB === 'number') {
        return this.sortAsc ? valA - valB : valB - valA;
      } else {
        return 0;
      }
    });
  }
}
