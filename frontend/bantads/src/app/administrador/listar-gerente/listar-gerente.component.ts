import { Component, OnInit } from '@angular/core';
import { Gerente } from 'src/app/shared';
import { AdministradorService } from '../services';

@Component({
  selector: 'app-listar-gerente',
  templateUrl: './listar-gerente.component.html',
  styleUrls: ['./listar-gerente.component.css']
})
export class ListarGerenteComponent implements OnInit {
constructor(private administradorService : AdministradorService){}

  ngOnInit(): void {
    this.gerentes = this.listarTodos();
    this.sortData();
  }

listarTodos(): Gerente[]{
 return this.administradorService.listarTodos();
}

remover($event: any, gerente: Gerente): void{
  $event.preventDefault();
  if (confirm(`Deseja realmente remover o gerente ${gerente.nome}`)){
    this.administradorService.remover(gerente.id!);
    this.gerentes = this.listarTodos();
  }
}

gerentes: Gerente[] = [];

sortKey: keyof Gerente = 'nome'; 
sortAsc = true;

sortData(key: keyof Gerente = this.sortKey): void {
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
      return this.sortAsc ? valB.localeCompare(valA) : valA.localeCompare(valB);
    } else if (typeof valA === 'number' && typeof valB === 'number') {
      return this.sortAsc ? valA - valB : valB - valA;
    } else {
      return 0;
    }
  });
}
}
