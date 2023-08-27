import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'gerente-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private pedidosPendentesAprovacao: any;

  constructor(private gerenteService: GerenteService) { }

  ngOnInit(): void {
    this.pedidosPendentesAprovacao = this.gerenteService.getPedidosPendentesAprovacao();
  }

  get listaPedidosPendentesAprovacao() {
    return this.pedidosPendentesAprovacao;
  }
}
