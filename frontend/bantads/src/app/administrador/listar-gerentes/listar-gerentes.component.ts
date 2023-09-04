import { Component, OnInit } from '@angular/core';
import { Gerente } from 'src/app/shared';
import { AdministradorService } from '../services';

@Component({
  selector: 'app-listar-gerente',
  templateUrl: './listar-gerentes.component.html',
  styleUrls: ['./listar-gerentes.component.css']
})
export class ListarGerentesComponent implements OnInit {

  private gerentes!: Gerente[];

  constructor(private administradorService : AdministradorService) {}

  ngOnInit(): void {
    this.gerentes = this.administradorService.getGerentes();
    this.sortData();
  }

  get listaGerentes() {
    return this.gerentes;
  }

  remover($event: any, gerente: Gerente): void{
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o gerente ${gerente.nome}`)){
      this.administradorService.remover(gerente.id!);
      this.administradorService.getGerentes();
    }
  }

  sortKey: keyof Gerente = 'nome';
  sortAsc = false;

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
