import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuscaCEPService } from 'src/app/entrar/services';
import { AlterarPerfil, Cliente } from 'src/app/shared';
import { PopupComponent } from 'src/app/shared/popup/popup.component';
import { ValidationService } from 'src/app/shared/services';
import { ClienteService } from '../../services';

@Component({
  selector: 'cliente-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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

  private cliente!: Cliente;
  private clienteAlter!: AlterarPerfil;


  constructor(private clienteService: ClienteService, private validationService: ValidationService, private buscaCEPService: BuscaCEPService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.cliente = this.clienteService.getCliente();
    this.clienteAlter = new AlterarPerfil (
      this.cliente.nome,
      this.cliente.email,
      this.cliente.telefone,
      this.cliente.salario,
      {...this.cliente.endereco},
    );
  }

  onModoChange(newModo: string) {
    this.modo = newModo;
    this.modoChange.emit(this.modo);
  }

  alterarPerfil(): void {
    this.clienteService.updateCliente(this.clienteAlter);
  }

  abrirPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "400px",
      data: {
        titulo: "Alterar perfil",

        mensagem: "Tem certeza que deseja alterar seu perfil?",

        gifSrc: "../../../assets/gif/nerd.gif",

        botaoText1: "Cancelar",

        musica1: new Audio('../../../assets/sound/oneyma.mp3'),

        onBotao1Click: () => {
          dialogRef.close();
        },

        botaoText2: "Confirmar",

        musica2: new Audio('../../../assets/sound/zoio.mp3'),

        onBotao2Click: () => {
          this.alterarPerfil();
          this.modo = "visualizar";
          this.modoChange.emit(this.modo);
          dialogRef.close();
        },

        mostrarBotaoVermelho: true, 
        mostrarBotaoVerde: true,
      },
    });
  }

  get nome(): string {
    return this.clienteAlter.nome!;
  }

  set nome(nome: string) {
    this.clienteAlter.nome = nome;
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
    return this.clienteAlter.email!;
  }

  set email(email: string) {
    this.clienteAlter.email = email;
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
    return this.clienteAlter.telefone!;
  }

  set telefone(telefone: string) {
    this.clienteAlter.telefone = telefone;
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
    return this.clienteAlter.salario!;
  }

  set salario(salario: string) {
    this.clienteAlter.salario = salario;
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
    return this.clienteAlter.endereco!.cep!;
  }

  set cep(cep: string) {
    this.clienteAlter.endereco!.cep = cep;
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
    return this.clienteAlter.endereco!.tipo!;
  }

  set tipo(tipo: string) {
    this.clienteAlter.endereco!.tipo = tipo;
  }

  get logradouro(): string {
    return this.clienteAlter.endereco!.logradouro!;
  }

  set logradouro(logradouro: string) {
    this.clienteAlter.endereco!.logradouro = logradouro;
  }

  get numero(): string {
    return this.clienteAlter.endereco!.numero!;
  }

  set numero(numero: string) {
    this.clienteAlter.endereco!.numero = numero;
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
    return this.clienteAlter.endereco!.complemento!;
  }

  set complemento(complemento: string) {
    this.clienteAlter.endereco!.complemento = complemento;
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
    return this.clienteAlter.endereco!.cidade!;
  }

  set cidade(cidade: string) {
    this.clienteAlter.endereco!.cidade = cidade;
  }

  get estado(): string {
    return this.clienteAlter.endereco!.estado!;
  }

  set estado(estado: string) {
    this.clienteAlter.endereco!.estado = estado;
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
    this.tipo = "";
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
