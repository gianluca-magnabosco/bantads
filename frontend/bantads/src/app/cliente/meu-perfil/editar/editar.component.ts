import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuscaCEPService } from 'src/app/entrar/services';
import { Cliente, Endereco } from 'src/app/shared';
import { PopupComponent } from 'src/app/shared/popup/popup.component';
import { ValidationService } from 'src/app/shared/services';

@Component({
  selector: 'cliente-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  @Input() modo!: string;
  @Output() modoChange = new EventEmitter<string>();

  private nomeBlurred: boolean = false;
  private nomeValid: boolean = false;
  private nomeError: string = "";

  private emailBlurred: boolean = false;
  private emailValid: boolean = false;
  private emailError: string = "";

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

  private endereco: Endereco = {
    cep: "",
    tipo: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
  }

  private cliente: Cliente = {
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    salario: "",
    endereco: this.endereco,
  }

  constructor(private validationService: ValidationService, private buscaCEPService: BuscaCEPService, private dialog: MatDialog) {}

  onModoChange(newModo: string) {
    this.modo = newModo;
    this.modoChange.emit(this.modo);
  }

  abrirPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '400px',
      data: {
        titulo: 'Tem certeza que deseja alterar seu perfil?',
        gifSrc: 'https://media.tenor.com/fCYvprWxVnIAAAAM/luntry-luntryifunny.gif',

        onBotao1Click: () => {
          console.log('botao 1');

        },
        onBotao2Click: () => {
          console.log('botao 2');

        },

      },
    });
  }

  get nome(): string {
    return this.cliente.nome!;
  }

  set nome(nome: string) {
    this.cliente.nome = nome;
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
    return this.cliente.email!;
  }

  set email(email: string) {
    this.cliente.email = email;
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

  get cpf(): string {
    return this.cliente.cpf!;
  }

  set cpf(cpf: string) {
    this.cliente.cpf = cpf;
  }

  get telefone(): string {
    return this.cliente.telefone!;
  }

  set telefone(telefone: string) {
    this.cliente.telefone = telefone;
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

  get salario(): string {
    return this.cliente.salario!;
  }

  set salario(salario: string) {
    this.cliente.salario = salario;
  }

  get isSalarioValid(): boolean {
    return this.salarioValid;
  }

  get salarioErrorText(): string {
    return this.salarioError;
  }

  get salarioBeenBlurred(): boolean {
    return this.salarioBlurred;
  }

  setSalarioBeenBlurred(): void {
    this.salarioBlurred = true;
    this.validateSalario();
  }

  get cep(): string {
    return this.cliente.endereco!.cep!;
  }

  set cep(cep: string) {
    this.cliente.endereco!.cep = cep;
  }

  get isCepValid(): boolean {
    return this.cepValid;
  }

  get cepErrorText(): string {
    return this.cepError;
  }

  get cepBeenBlurred(): boolean {
    return this.cepBlurred;
  }

  setCepBeenBlurred(): void {
    this.cepBlurred = true;
    this.validateCep();
  }

  get tipo(): string {
    return this.cliente.endereco!.tipo!;
  }

  set tipo(tipo: string) {
    this.cliente.endereco!.tipo = tipo;
  }

  get logradouro(): string {
    return this.cliente.endereco!.logradouro!;
  }

  set logradouro(logradouro: string) {
    this.cliente.endereco!.logradouro = logradouro;
  }

  get numero(): string {
    return this.cliente.endereco!.numero!;
  }

  set numero(numero: string) {
    this.cliente.endereco!.numero = numero;
  }

  get isNumeroValid(): boolean {
    return this.numeroValid;
  }

  get numeroErrorText(): string {
    return this.numeroError;
  }

  get numeroBeenBlurred(): boolean {
    return this.numeroBlurred;
  }

  setNumeroBeenBlurred(): void {
    this.numeroBlurred = true;
    this.validateNumero();
  }

  get complemento(): string {
    return this.cliente.endereco!.complemento!;
  }

  set complemento(complemento: string) {
    this.cliente.endereco!.complemento = complemento;
  }

  get isComplementoValid(): boolean {
    return this.complementoValid;
  }

  get complementoErrorText(): string {
    return this.complementoError;
  }

  get complementoBeenBlurred(): boolean {
    return this.complementoBlurred;
  }

  setComplementoBeenBlurred(): void {
    this.complementoBlurred = true;
    this.validateComplemento();
  }

  get cidade(): string {
    return this.cliente.endereco!.cidade!;
  }

  set cidade(cidade: string) {
    this.cliente.endereco!.cidade = cidade;
  }

  get estado(): string {
    return this.cliente.endereco!.estado!;
  }

  set estado(estado: string) {
    this.cliente.endereco!.estado = estado;
  }

  isButtonDisabled(): boolean {
    let numberSalario = Number(this.salario.replace(/[^\d,]/g, '').replace(',', '.'));

    return (
      (this.nome === "" || !this.nome.match(/^[a-zA-ZáãàâéèêíîìóòôõúûùÁÀÃÂÉÈÊÍÌÎÓÒÔÕÚÙÛñÑÇç\s]+$/))
      || (this.email === "" || !this.email.match(/[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}/))
      || (this.telefone === "" || !this.telefone.match(/\(\d{2}\)\s\d{5}-\d{4}/))
      || (this.salario === "" || isNaN(numberSalario) || numberSalario <= 0.00 || numberSalario > 100000000)
      || (this.cep === "" || !this.cep.match(/\d{5}-\d{3}/))
      || !this.isEnderecoValid()
    );
  }

  isEnderecoValid(): boolean {
    return (
      this.tipo.length > 0
      && this.logradouro.length > 0
      && (this.numero.length > 0 && (Number(this.numero) > 0 && Number(this.numero) <= 100000))
      && this.complemento.length > 0
      && this.cidade.length > 0
      && this.estado.length > 0
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

  validateSalario(): void {
    let result = this.validationService.validateMoney(this.salario, this.salarioBeenBlurred);

    switch (result) {
      case "vazio": {
        this.salarioValid = false;
        this.salarioError = "Insira seu salário!";
        return;
      }

      case "inválido": {
        this.salarioValid = false;
        this.salarioError = "Insira um salário válido!";
        return;
      }

      default: {
        this.salarioValid = true;
        this.salarioError = "";
        return;
      }
    }
  }

  validateCep(): void {
    let result = this.validationService.validateCep(this.cep, this.cepBeenBlurred);

    switch (result) {
      case "vazio": {
        this.cepValid = false;
        this.cepError = "Insira seu CEP!";
        return;
      }

      case "inválido": {
        this.cepValid = false;
        this.cepError = "Insira um CEP válido!";
        return;
      }

      default: {
        this.cepValid = true;
        this.cepError = "";
        return;
      }
    }
  }

  validateNumero(): void {
    let result = this.validationService.validateNumero(this.numero, this.numeroBeenBlurred);

    switch (result) {
      case "vazio": {
        this.numeroValid = false;
        this.numeroError = "Insira seu número!";
        return;
      }

      case "inválido": {
        this.numeroValid = false;
        this.numeroError = "Insira um número válido!";
        return;
      }

      default: {
        this.numeroValid = true;
        this.numeroError = "";
        return;
      }
    }
  }

  validateComplemento(): void {
    let result = this.validationService.validateComplemento(this.complemento, this.complementoBeenBlurred);

    switch (result) {
      case "vazio": {
        this.complementoValid = false;
        this.complementoError = "Insira seu complemento!";
        return;
      }

      default: {
        this.complementoValid = true;
        this.complementoError = "";
        return;
      }
    }
  }

  validateAndFormatTelefone(event: any): void {
    const previousValue = this.telefone;
    this.telefone = this.validationService.formatTelefone(event.target.value, previousValue);
    this.validateTelefone();
  }

  validateAndFormatSalario(event: any): void {
    this.salario = this.validationService.formatMoney(event.target.value);
    this.validateSalario();
  }

  validateFormatAndConsultarCep(event: any): void {
    this.cliente.endereco!.tipo = "";
    this.logradouro = "";
    this.cidade = "";
    this.estado = "";

    this.cep = this.validationService.formatCep(event.target.value);
    this.validateCep();

    if (this.cep.match(/\d{5}-\d{3}/)) {
      this.consultarCep();
    }
  }

  consultarCep(): void {
    this.buscaCEPService.buscar(this.cep).subscribe((result: any) => {
      if (result.logradouro === undefined) {
        this.cepValid = false;
        this.cepError = "Insira um CEP existente!";
        return;
      }

      let splitLogradouro = result.logradouro.split(' ');
      this.tipo = splitLogradouro.shift();
      this.logradouro = splitLogradouro.join(' ');
      this.cidade = result.localidade;
      this.estado = result.uf;
    });
  }
}
