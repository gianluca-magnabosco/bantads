import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gerente } from 'src/app/shared';
import { AdministradorService } from '../services';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../shared/popup/popup.component';
import { Cadastro, Endereco } from 'src/app/shared';
import { ValidationService } from 'src/app/shared/services';

@Component({
  selector: 'app-inserir-gerente',
  templateUrl: './inserir-gerente.component.html',
  styleUrls: ['./inserir-gerente.component.css']
})
export class InserirGerenteComponent implements OnInit {
@ViewChild('formGerente') formGerente! : NgForm;
gerente! : Gerente;

private nomeBlurred: boolean = false;
private nomeValid: boolean = false;
private nomeError: string = "";

private emailBlurred: boolean = false;
private emailValid: boolean = false;
private emailError: string = "";

private cpfBlurred: boolean = false;
private cpfValid: boolean = false;
private cpfError: string = "";

private telefoneBlurred: boolean = false;
private telefoneValid: boolean = false;
private telefoneError: string = "";

private salarioBlurred: boolean = false;
private salarioValid: boolean = false;
private salarioError: string = "";

private cepBlurred: boolean = false;
private cepValid: boolean = false;
private cepError: string = "";

private numeroBlurred: boolean = false;
private numeroValid: boolean = false;
private numeroError: string = "";

private complementoBlurred: boolean = false;
private complementoValid: boolean = false;
private complementoError: string = "";

private showEndereco: boolean = false;

private endereco: Endereco = {
  cep: "",
  tipo: "",
  logradouro: "",
  numero: "",
  complemento: "",
  cidade: "",
  estado: "",
}

private cadastroDTO: Cadastro = {
  nome: "",
  email: "",
  cpf: "",
  telefone: "",
  salario: "",
  endereco: this.endereco,
}

constructor(
  private validationService: ValidationService,
  private administradorService : AdministradorService,
  private router: Router,
  private dialog: MatDialog,
){}

get nome(): string {
  return this.cadastroDTO.nome!;
}

set nome(nome: string) {
  this.cadastroDTO.nome = nome;
}

get isNomeValid(): boolean {
  return this.nomeValid;
}

get nomeErrorText(): string {
  return this.nomeError;
}

get nomeBeenBlurred(): boolean {
  return this.nomeBlurred;
}

setNomeBeenBlurred(): void {
  this.nomeBlurred = true;
  this.validateNome();
}

get email(): string {
  return this.cadastroDTO.email!;
}

set email(email: string) {
  this.cadastroDTO.email = email;
}

get isEmailValid(): boolean {
  return this.emailValid;
}

get emailErrorText(): string {
  return this.emailError;
}

get emailBeenBlurred(): boolean {
  return this.emailBlurred;
}

setEmailBeenBlurred(): void {
  this.emailBlurred = true;
  this.validateEmail();
}

get telefone(): string {
  return this.cadastroDTO.telefone!;
}

set telefone(telefone: string) {
  this.cadastroDTO.telefone = telefone;
}

get isTelefoneValid(): boolean {
  return this.telefoneValid;
}

get telefoneErrorText(): string {
  return this.telefoneError;
}

get telefoneBeenBlurred(): boolean {
  return this.telefoneBlurred;
}

setTelefoneBeenBlurred(): void {
  this.telefoneBlurred = true;
  this.validateTelefone();
}

get cpf(): string {
  return this.cadastroDTO.cpf!;
}

set cpf(cpf: string) {
  this.cadastroDTO.cpf = cpf;
}

get isCpfValid(): boolean {
  return this.cpfValid;
}

get cpfErrorText(): string {
  return this.cpfError;
}

get cpfBeenBlurred(): boolean {
  return this.cpfBlurred;
}

setCpfBeenBlurred(): void {
  this.cpfBlurred = true;
  this.validateCpf();
}

validateAndFormatCpf(event: any): void {
  this.cpf = this.validationService.formatCpf(event.target.value);
  this.validateCpf();
}

ngOnInit(): void {
    this.gerente = new Gerente();
}

inserir(): void{
  if(this.formGerente.form.valid){
    this.administradorService.inserir(this.gerente);
    this.router.navigate(["/admin/listar-gerentes"]);
  }
}

isButtonDisabled(): boolean {
  return (
    this.cpf === "" || !this.validationService.innerValidateCpf(this.cpf)
  );
}

validateNome(): void {
  let result = this.validationService.validateNome(this.nome, this.nomeBeenBlurred);

  switch (result) {
    case "vazio": {
      this.nomeValid = false;
      this.nomeError = "Insira seu nome!";
      return;
    }

    case "inválido": {
      this.nomeValid = false;
      this.nomeError = "Insira um nome válido!";
      return;
    }

    default: {
      this.nomeValid = true;
      this.nomeError = "";
      return;
    }
  }
}

validateEmail(): void {
  let result = this.validationService.validateEmail(this.email, this.emailBeenBlurred);

  switch (result) {
    case "vazio": {
      this.emailValid = false;
      this.emailError = "Insira seu e-mail!";
      return;
    }

    case "inválido": {
      this.emailValid = false;
      this.emailError = "Insira um e-mail válido!";
      return;
    }

    default: {
      this.emailValid = true;
      this.emailError = "";
      return;
    }
  }
}

validateCpf(): void {
  let result = this.validationService.validateCpf(this.cpf, this.cpfBeenBlurred);

  switch (result) {
    case "vazio": {
      this.cpfValid = false;
      this.cpfError = "Insira seu CPF!";
      return;
    }

    case "inválido": {
      this.cpfValid = false;
      this.cpfError = "Insira um CPF válido!";
      return;
    }

    default: {
      this.cpfValid = true;
      this.cpfError = "";
      return;
    }
  }
}

validateTelefone(): void {
  let result = this.validationService.validateTelefone(this.telefone, this.telefoneBeenBlurred);

  switch (result) {
    case "vazio": {
      this.telefoneValid = false;
      this.telefoneError = "Insira seu telefone!";
      return;
    }

    case "inválido": {
      this.telefoneValid = false;
      this.telefoneError = "Insira um telefone válido!";
      return;
    }

    default: {
      this.telefoneValid = true;
      this.telefoneError = "";
      return;
    }
  }
}

validateAndFormatTelefone(event: any): void {
  const previousValue = this.telefone;
  this.telefone = this.validationService.formatTelefone(event.target.value, previousValue);
  this.validateTelefone();
}

abrirPopup(): void {
  const dialogRef = this.dialog.open(PopupComponent, {
    width: '400px',
    data: {
      titulo: 'Adicionar Gerente', 

      mensagem: 'Você adicionou o gerente com sucesso!', 

      gifSrc: '../../../assets/gif/lingua.gif', 

      musica2: new Audio('../../../assets/sound/coringa.mp3'), 


      botaoText2: 'Ok', 

      onBotao2Click: () => { 
        dialogRef.close();
        
         },
      mostrarCampoTexto: false,    
      mostrarBotaoVermelho: false, 
      mostrarBotaoVerde: true,  
      
    },
  });
}


}
