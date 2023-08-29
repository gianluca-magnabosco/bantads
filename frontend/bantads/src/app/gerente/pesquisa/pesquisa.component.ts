import { Component } from '@angular/core';

@Component({
  selector: 'gerente-inicio',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent   {
  cpf: string = '';
  clienteEncontrado = false;
  cliente = {
    nome: 'Nome do Cliente',
    cpf: '123.456.789-00',
    cidade: 'Azerbaijão',
    estado: 'Paraná',
    conta: {
      numero: '12345',
      saldo: 1500.00,
      tipo: 'xxxxxxx' ,
      agencia: 'xxxxxxxx'
    }
  };

  buscarCliente() {
    // aqui o scriptzin pra buscar o cliente, fiz essa simulação aq so pra ver como ia ficar
    this.clienteEncontrado = true;
  }

  formatCPF(cpf: string): string {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpf;
  }

  updateCPF(event: Event): void {
    this.cpf = this.formatCPF((event.target as HTMLInputElement).value);
  }
}

