import { Component } from '@angular/core';
import { BuscaCEPService } from '../services';
import { Form, NgForm } from '@angular/forms';

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
  tipo: string = '';
  numero: string = '';




  isButtonDisabled(): boolean {
    return this.email === '' || this.password === ''
    || this.nome === '' || this.cpf === ''
    || this.telefone === '' || this.salario === ''
    || this.tipo === ''
    || this.numero === ''

  }

  constructor(private buscaCEPService: BuscaCEPService){
  }

  consultaCep(valor: any, form: NgForm){
    this.buscaCEPService.buscar(valor).subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados: any, form: NgForm){
    console.log(dados)
    form.form.patchValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
    })
    
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    return filterValue;
  }

}