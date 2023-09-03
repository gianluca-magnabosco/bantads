import { Injectable } from '@angular/core';
import { Cliente, Endereco } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getCliente(): Cliente {
    let endereco: Endereco = new Endereco("80230-090", "Rua", "Alferes Poli", "132", "Ap 123", "Curitiba", "Paraná");
    return new Cliente(1, "José", "jose@jose.com", "123.456.789-00", "(41) 99969-4200", "R$ 1.000,00", endereco);
  }
}
