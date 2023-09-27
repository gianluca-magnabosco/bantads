import { Injectable } from '@angular/core';
import { ClienteAprovacao, ClienteConsultaListagem } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  pedidosPendentesAprovacao!: ClienteAprovacao[];
  clientes!: ClienteConsultaListagem[];
  melhoresClientes!: ClienteConsultaListagem[];

  constructor() {
    this.pedidosPendentesAprovacao = [
      new ClienteAprovacao(1, "Alef Manga", "837.456.721-21", 12000.69),
      new ClienteAprovacao(2, "Marina Silva", "164.285.129-65", 5000.32),
      new ClienteAprovacao(3, "Zé da Manga", "194.347.285-92", 1254.43),
      new ClienteAprovacao(4, "James da Salada de Fruta", "873.831.762-67", 950.21),
      new ClienteAprovacao(5, "Bluezao", "012.845.786-72", 420.69),
    ];
    this.clientes = [
      new ClienteConsultaListagem(1, "Amigao", "123.456.789-00", "Curitiba", "Paraná", 1000.69),
      new ClienteConsultaListagem(2, "Biricutico", "456.123.789-40", "Curitiba", "Paraná", 89798.69),
      new ClienteConsultaListagem(3, "Drelelele", "123.789.456-03", "Rio Negro", "Paraná", 12312.69),
      new ClienteConsultaListagem(4, "Diamba", "123.543.789-12", "Mafra", "Santa Catarina", 543.69),
      new ClienteConsultaListagem(5, "Drelens", "123.456.321-10", "São Paulo", "São Paulo", 765.69),
    ];
    this.melhoresClientes = [
      new ClienteConsultaListagem(1, "Amigao", "123.456.789-00", "Curitiba", "Paraná", 1000.69),
      new ClienteConsultaListagem(2, "Biricutico", "456.123.789-40", "Curitiba", "Paraná", 89798.69),
      new ClienteConsultaListagem(3, "Drelelele", "123.789.456-03", "Rio Negro", "Paraná", 12312.69),
    ];
  }

  getPedidosPendentesAprovacao(): ClienteAprovacao[] {
    return this.pedidosPendentesAprovacao;
  }

  getClientes(): ClienteConsultaListagem[] {
    return this.clientes;
  }

  getMelhoresClientes(): ClienteConsultaListagem[] {
    return this.melhoresClientes;
  }

  aprovarCliente(id: number) {
    this.pedidosPendentesAprovacao = this.pedidosPendentesAprovacao.filter((item) => item.id != id);
  }

  recusarCliente(id: number) {
    this.pedidosPendentesAprovacao = this.pedidosPendentesAprovacao.filter((item) => item.id != id);
  }
}
