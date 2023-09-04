import { Component, OnInit } from '@angular/core';
import { ClienteRelatorio } from 'src/app/shared';
import { AdministradorService } from '../services';

@Component({
  selector: 'admin-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
  styleUrls: ['./relatorio-clientes.component.css']
})
export class RelatorioClientesComponent implements OnInit {

  private clientes!: ClienteRelatorio[];

  constructor(private administradorService : AdministradorService) {}

  ngOnInit(): void {
    this.clientes = this.administradorService.getRelatorioClientes();
    this.sortData();
  }

  get listaClientes() {
    return this.clientes;
  }

  sortKey: keyof ClienteRelatorio = "nome";
  sortAsc = false;

  sortData(key: keyof ClienteRelatorio = this.sortKey): void {
    if (key === this.sortKey) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
      this.sortKey = key;
    }

    this.clientes.sort((a, b) => {
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
