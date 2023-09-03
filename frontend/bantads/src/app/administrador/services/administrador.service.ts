import { Injectable } from '@angular/core';
import { ClienteRelatorio, Gerente, GerenteDashboard } from 'src/app/shared';

const LS_CHAVE: string = "gerentes";

@Injectable({
  providedIn: 'root'
})

export class AdministradorService {

  constructor() { }

  getRelatorioClientes(): ClienteRelatorio[] {
    return (
      [
        new ClienteRelatorio("Amigao", "123.456.789-00", 1000.00, 500.00, "Seu Creyson"),
        new ClienteRelatorio("Brunao", "455.123.789-00", 3000.00, 1500.00, "Seu Creyson"),
        new ClienteRelatorio("Homem", "452.321.789-00", 1230.00, 300.52, "Seu Creyson"),
        new ClienteRelatorio("Lobisomem", "321.456.789-00", 1000.00, -420.69, "Seu Creyson"),
      ]
    )
  }

  getDashboardGerentes(): GerenteDashboard[] {
    return (
      [
        new GerenteDashboard("Seu Creyson", 10, 2300.52, -420.69)
      ]
    )
  }

  listarTodos(): Gerente[]{
    const gerentes = localStorage[LS_CHAVE];
    return gerentes ? JSON.parse(gerentes) : [];
  }

  inserir(gerente: Gerente): void{
    const gerentes = this.listarTodos();
    gerente.id = new Date().getTime();
    gerentes.push(gerente);
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }

  buscarPorId(id: number): Gerente | undefined{
    const gerentes: Gerente[] = this.listarTodos();
    return gerentes.find(gerente => gerente.id === id);
  }

  atualizar(gerente: Gerente): void{
    const gerentes: Gerente[] = this.listarTodos();
    gerentes.forEach((obj, index, objs) => {
      if(gerente.id === obj.id){
        objs[index] = gerente
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }

  remover(id:number): void{
    let gerentes: Gerente[] = this.listarTodos();
    gerentes = gerentes.filter(gerente => gerente.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }

  getGerentes(): any {
    return (
      [
        { nome: "Amigao", quantidade_clientes: "10", soma_saldos_positivos: "R$ 1003,00", soma_saldos_negativos: "R$ 302,00" },
        { nome: "Amigao", quantidade_clientes: "10", soma_saldos_positivos: "R$ 1003,00", soma_saldos_negativos: "R$ 302,00" },
        { nome: "Amigao", quantidade_clientes: "10", soma_saldos_positivos: "R$ 1003,00", soma_saldos_negativos: "R$ 302,00" },
        { nome: "Amigao", quantidade_clientes: "10", soma_saldos_positivos: "R$ 1003,00", soma_saldos_negativos: "R$ 302,00" },
        { nome: "Amigao", quantidade_clientes: "10", soma_saldos_positivos: "R$ 1003,00", soma_saldos_negativos: "R$ 302,00" },
      ]
    )
  }

  getClientes(): any {
    return (
      [
        { nome: "Amigao", cpf: "10", limite: "R$ 1003,00", saldo: "R$ 302,00", nomeGerente: "oi" },
        { nome: "Amigao", cpf: "10", limite: "R$ 1003,00", saldo: "R$ 302,00", nomeGerente: "oi" },
        { nome: "Amigao", cpf: "10", limite: "R$ 1003,00", saldo: "R$ 302,00", nomeGerente: "oi" },
        { nome: "Amigao", cpf: "10", limite: "R$ 1003,00", saldo: "R$ 302,00", nomeGerente: "oi" },
        { nome: "Amigao", cpf: "10", limite: "R$ 1003,00", saldo: "R$ 302,00", nomeGerente: "oi" },
      ]
    )
  }

}
