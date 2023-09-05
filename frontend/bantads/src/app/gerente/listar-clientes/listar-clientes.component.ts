import { Component, OnInit } from '@angular/core';
import { ClienteConsultaListagem } from 'src/app/shared';
import { ValidationService } from 'src/app/shared/services';
import { GerenteService } from '../services';

@Component({
  selector: 'gerente-inicio',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  private searchCpf: string = "";
  private searchName: string = "";

  clientes!: ClienteConsultaListagem[];

  filteredClientes!: ClienteConsultaListagem[];

  sortKey: keyof ClienteConsultaListagem = 'nome';
  sortAsc = false;

  constructor(private validationService: ValidationService, private gerenteService: GerenteService) {
    this.clientes = this.gerenteService.getClientes();
    this.filteredClientes = this.clientes;
  }

  ngOnInit(): void {
    this.sortData();
  }

  get cpf(): string {
    return this.searchCpf;
  }

  set cpf(cpf: string) {
    this.searchCpf = cpf;
  }

  get nome(): string {
    return this.searchName;
  }

  set nome(nome: string) {
    this.searchName = nome;
  }

  formatAndSearchByCpf(event: any): void {
    this.cpf = this.validationService.formatCpf(event.target.value);
    this.searchByNomeAndCpf();
  }

  searchByNome(event: any): void {
    this.searchByNomeAndCpf();
  }

  searchByNomeAndCpf(): void {
    this.filteredClientes = this.clientes.filter((cliente) => {
      return (
        cliente.nome!.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").startsWith(this.nome.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
          && (cliente.cpf!.startsWith(this.cpf.toLowerCase()))
      );
  });
  }

  sortData(key: keyof ClienteConsultaListagem = this.sortKey): void {
    if (key === this.sortKey) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
      this.sortKey = key;
    }

    this.filteredClientes.sort((a, b) => {
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

