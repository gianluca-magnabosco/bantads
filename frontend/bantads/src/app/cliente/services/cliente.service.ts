import { Injectable } from '@angular/core';
import { AlterarPerfil, Cliente, Endereco } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private cliente!: Cliente;

  constructor() {
    let endereco: Endereco = new Endereco("80230-090", "Rua", "Alferes Poli", "132", "Ap 123", "Curitiba", "Paraná");
    this.cliente = new Cliente(1, "José", "jose@jose.com", "123.456.789-00", "(41) 99969-4200", "R$ 1.000,00", endereco);
  }

  getCliente(): Cliente {
    return this.cliente;
  }

  updateCliente(clienteAlter: AlterarPerfil): void {
    this.cliente = {...this.cliente, nome: clienteAlter.nome, email: clienteAlter.email, telefone: clienteAlter.telefone, salario: clienteAlter.salario, endereco: clienteAlter.endereco};
  }
}
