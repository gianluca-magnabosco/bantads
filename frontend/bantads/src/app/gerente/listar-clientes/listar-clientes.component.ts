import { Component } from '@angular/core';

interface Client {
  cpf: string;
  nome: string;
  cidade: string;
  estado: string;
  saldo: number;
}

@Component({
  selector: 'gerente-inicio',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent   {

  clients: Client[] = [
    {
      cpf: '123.456.789-00',
      nome: 'Coringa',
      cidade: 'Coringa City',
      estado: 'Paraná',
      saldo: 1000
    },
    {
      cpf: '987.654.321-00',
      nome: 'Batman',
      cidade: 'Gotham City',
      estado: 'Bahia',
      saldo: 9000
    },
    {
      cpf: '137.354.823-02',
      nome: 'Mulher Maravilha',
      cidade: 'Rio de Janeiro',
      estado: 'Rio de Janeiro',
      saldo: 500
    },
    {
      cpf: '135.214.763-12',
      nome: 'Hulk',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      saldo: 100
    }
  ];

  sortKey: keyof Client = 'nome';
  sortAsc = true;

  constructor() { }

  ngOnInit(): void {
    this.sortData();
  }

  sortData(key: keyof Client = this.sortKey): void {
    if (key === this.sortKey) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
      this.sortKey = key;
    }

    this.clients.sort((a, b) => {
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

