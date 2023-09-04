import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services/gerente.service';

interface Pedido {
  nome: string;
  cpf: string;
  salario: number;
}

@Component({
  selector: 'gerente-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private pedidosPendentesAprovacao: Pedido[];
  private ordenacaoAtual: string = '';
  private ordemCrescente: boolean = true; 

  constructor(private gerenteService: GerenteService) {
    this.pedidosPendentesAprovacao = [];
  }

  ngOnInit(): void {
    this.pedidosPendentesAprovacao = this.gerenteService.getPedidosPendentesAprovacao();
  }

  get listaPedidosPendentesAprovacao() {
    const listaOrdenada = [...this.pedidosPendentesAprovacao]; 
    if (this.ordenacaoAtual === 'nome') {
      listaOrdenada.sort((a: Pedido, b: Pedido) => a.nome.localeCompare(b.nome));
    } else if (this.ordenacaoAtual === 'cpf') {
      listaOrdenada.sort((a: Pedido, b: Pedido) => a.cpf.localeCompare(b.cpf));
    } else if (this.ordenacaoAtual === 'salario') {
      listaOrdenada.sort((a: Pedido, b: Pedido) => a.salario - b.salario);
    }

    if (!this.ordemCrescente) {
      listaOrdenada.reverse();
    }

    return listaOrdenada;
  }


  ordenarLista(atributo: string) {
    if (this.ordenacaoAtual === atributo) {

      this.ordemCrescente = !this.ordemCrescente;
    } else {

      this.ordemCrescente = true;
    }
    this.ordenacaoAtual = atributo;
  }
}
