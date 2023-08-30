import { Component } from '@angular/core';
import { BuscaCEPService, CadastroService } from '../services';
import { Cadastro, Endereco } from 'src/app/shared';
import { ValidationService } from 'src/app/shared/services';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent {

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

  constructor(private validationService: ValidationService, private cadastroService: CadastroService, private buscaCEPService: BuscaCEPService) {}

  cadastrar(): void {
    this.cadastroService.cadastrar(this.cadastroDTO);
  }

  get enderecoShown(): boolean {
    return this.showEndereco;
  }

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

  get salario(): string {
    return this.cadastroDTO.salario!;
  }

  set salario(salario: string) {
    this.cadastroDTO.salario = salario;
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
    return this.cadastroDTO.endereco!.cep!;
  }

  set cep(cep: string) {
    this.cadastroDTO.endereco!.cep = cep;
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
    return this.cadastroDTO.endereco!.tipo!;
  }

  set tipo(tipo: string) {
    this.cadastroDTO.endereco!.tipo = tipo;
  }

  get logradouro(): string {
    return this.cadastroDTO.endereco!.logradouro!;
  }

  set logradouro(logradouro: string) {
    this.cadastroDTO.endereco!.logradouro = logradouro;
  }

  get numero(): string {
    return this.cadastroDTO.endereco!.numero!;
  }

  set numero(numero: string) {
    this.cadastroDTO.endereco!.numero = numero;
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
    return this.cadastroDTO.endereco!.complemento!;
  }

  set complemento(complemento: string) {
    this.cadastroDTO.endereco!.complemento = complemento;
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
    return this.cadastroDTO.endereco!.cidade!;
  }

  set cidade(cidade: string) {
    this.cadastroDTO.endereco!.cidade = cidade;
  }

  get estado(): string {
    return this.cadastroDTO.endereco!.estado!;
  }

  set estado(estado: string) {
    this.cadastroDTO.endereco!.estado = estado;
  }

  isButtonDisabled(): boolean {
    let numberSalario = Number(this.salario.replace(/[^\d,]/g, '').replace(',', '.'));

    return (
      (this.nome === "" || !this.nome.match(/^[a-zA-ZáãàâéèêíîìóòôõúûùÁÀÃÂÉÈÊÍÌÎÓÒÔÕÚÙÛñÑÇç\s]+$/))
      || (this.email === "" || !this.email.match(/[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}/))
      || (this.cpf === "" || !this.validationService.innerValidateCpf(this.cpf))
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

  validateAndFormatCpf(event: any): void {
    this.cpf = this.validationService.formatCpf(event.target.value);
    this.validateCpf();
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
    this.showEndereco = false;
    this.cadastroDTO.endereco!.tipo = "";
    this.logradouro = "";
    this.cidade = "";
    this.estado = "";

    this.cep = this.validationService.formatCep(event.target.value);
    this.validateCep();

    if (this.cep.match(/\d{5}-\d{3}/)) {
      this.showEndereco = true;
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
