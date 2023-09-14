import { Component } from '@angular/core';
import { ClienteConsultaListagem } from 'src/app/shared';
import { ValidationService } from 'src/app/shared/services';
import { GerenteService } from '../services';

@Component({
  selector: 'app-melhores-clientes',
  templateUrl: './melhores-clientes.component.html',
  styleUrls: ['./melhores-clientes.component.css']
})
export class MelhoresClientesComponent {
  melhoresClientes!: ClienteConsultaListagem[];
  filteredClientes!: ClienteConsultaListagem[];

  constructor(private validationService: ValidationService, private gerenteService: GerenteService) {
    this.melhoresClientes = this.gerenteService.getMelhoresClientes();
    this.filteredClientes = this.melhoresClientes;
    this.ordenarPorSaldo();
  }

  ordenarPorSaldo() {
    this.filteredClientes.sort((a, b) => (b.saldo ?? 0) - (a.saldo ?? 0));
  }
  
  sortKey: keyof ClienteConsultaListagem = "nome";
  sortAsc = false;

  sortData(key: keyof ClienteConsultaListagem = this.sortKey): void {
    if (key === this.sortKey) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
      this.sortKey = key;
    }

    this.melhoresClientes.sort((a, b) => {
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


