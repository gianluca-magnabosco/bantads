import { Component } from '@angular/core';
import { BuscaCEPService } from '../services';
import { Form, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent {
  showPassword: boolean = false;
  isInvalidEmail: boolean = false;
  isInvalidCPF: boolean = false;
  isInvalidPhone: boolean = false;
  isAddressDisabled: boolean = false;

  email: string = '';
  password: string = '';
  nome: string = '';
  cpf: string = '';
  telefone: string = '';
  salario: string = '';
  tipo: string = '';
  numero: string = '';
  cep: string ='';
  logradouro: string = '';
  bairro: string = '';
  cidade: string = '';
  uf: string = '';
  
  

  isButtonDisabled(): boolean {
    return this.email === '' || this.password === ''
    || this.nome === '' || this.cpf === ''
    || this.telefone === '' || this.salario === ''
    || this.tipo === ''
    || this.numero === '' || this.isInvalidCPF || this.isInvalidPhone || this.isInvalidEmail;

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
      this.isAddressDisabled = true;  
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    return filterValue;
  }


  formatCPF(event: any): void {
    const cleanValue = event.target.value.replace(/\D/g, '');
    if (cleanValue.length === 11) {
      const formattedCPF = cleanValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      this.cpf = formattedCPF;
    } else {
      this.cpf = cleanValue; 
    }
  }

  formatPhone(event: any): void {
    const cleanValue = event.target.value.replace(/\D/g, '');
    if (cleanValue.length === 11) {
      const formattedPhone = cleanValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      this.telefone = formattedPhone;
    } else {
      this.telefone = cleanValue; 
    }
  }

  formatCEP(event: any): void {
    const cleanValue = event.target.value.replace(/\D/g, '');
    if (cleanValue.length === 8) {
      const formattedCEP = cleanValue.replace(/(\d{5})(\d{3})/, '$1-$2');
      this.cep = formattedCEP;
    } else {
      this.cep = cleanValue; 
    }
  }


  validateEmail(): void {
    this.isInvalidEmail = !this.email.includes('@');
  }  

  validateCPF(): void {
    this.isInvalidCPF = this.cpf.replace(/\D/g, '').length !== 11;
  }

  validatePhone(): void {
    this.isInvalidPhone = this.telefone.replace(/\D/g, '').length !== 11;
  }






}