import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent {
  showPassword: boolean = false;

  email: string = '';
  password: string = '';
  nome: string = '';
  cpf: string = '';
  telefone: string = '';
  salario: string = '';
  cep: string = '';
  tipo: string = '';
  logradouro: string = '';
  numero: string = '';
  cidade: string = '';
  estado: string = '';



  isButtonDisabled(): boolean {
    return this.email === '' || this.password === ''
    || this.nome === '' || this.cpf === ''
    || this.telefone === '' || this.salario === ''
    || this.cep === '' || this.tipo === ''
    || this.logradouro === '' || this.numero === ''
    || this.cidade === '' || this.estado === '';
  }

}