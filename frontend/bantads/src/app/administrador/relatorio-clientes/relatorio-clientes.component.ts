import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared';
import { AdministradorService } from '../services';

@Component({
  selector: 'app-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
  styleUrls: ['./relatorio-clientes.component.css']
})
export class RelatorioClientesComponent implements OnInit {
constructor(private administradorService : AdministradorService){}

//   ngOnInit(): void {
//     this.clientes = this.listarTodos();
//     this.sortData();
//   }

// listarTodos(): Cliente[]{
//  return this.administradorService.listarTodos();
// }

ngOnInit(): void {
  this.clientes = this.administradorService.getClientes();
}

get listaGerentes() {
  return this.clientes;
}

clientes: Cliente[] = [];

sortKey: keyof Cliente = 'nome';
sortAsc = true;

sortData(key: keyof Cliente = this.sortKey): void {
  if (key === this.sortKey) {
    this.sortAsc = !this.sortAsc;
  } else {
    this.sortAsc = true;
    this.sortKey = key;
  }
}
}
