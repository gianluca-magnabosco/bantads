import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services/gerente.service';
import { ClienteAprovacao } from 'src/app/shared';

@Component({
  selector: 'gerente-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private pedidosPendentesAprovacao!: ClienteAprovacao[];

  constructor(private gerenteService: GerenteService) { }

  ngOnInit(): void {
    this.pedidosPendentesAprovacao = this.gerenteService.getPedidosPendentesAprovacao();
  }

  get listaPedidosPendentesAprovacao(): ClienteAprovacao[] {
    return this.pedidosPendentesAprovacao;
  }

  sortKey: keyof ClienteAprovacao = "nome";
  sortAsc = false;

  sortData(key: keyof ClienteAprovacao = this.sortKey): void {
    if (key === this.sortKey) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
      this.sortKey = key;
    }

    this.pedidosPendentesAprovacao.sort((a, b) => {
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
