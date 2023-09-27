import { Component, OnInit } from '@angular/core';
import { Gerente } from 'src/app/shared';
import { AdministradorService } from '../services';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationService } from 'src/app/shared/services';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/popup/popup.component';

@Component({
  selector: 'app-editar-gerente',
  templateUrl: './editar-gerente.component.html',
  styleUrls: ['./editar-gerente.component.css']
})
export class EditarGerenteComponent implements OnInit {
  gerente!: Gerente;

  id!: number;

  private nomeBlurred: boolean = false;
  private nomeValid: boolean = false;
  private nomeError: string = "";

  private emailBlurred: boolean = false;
  private emailValid: boolean = false;
  private emailError: string = "";

  private telefoneBlurred: boolean = false;
  private telefoneValid: boolean = false;
  private telefoneError: string = "";


  constructor(
    private validationService: ValidationService,
    private administradorService: AdministradorService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ){}


  get nome(): string {
    return this.gerente.nome!;
  }

  set nome(nome: string) {
    this.gerente.nome = nome;
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
    return this.gerente.email!;
  }

  set email(email: string) {
    this.gerente.email = email;
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
    return this.gerente.telefone!;
  }

  set telefone(telefone: string) {
    this.gerente.telefone = telefone;
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
    return this.gerente.cpf!;
  }

  set cpf(cpf: string) {
    this.gerente.cpf = cpf;
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    const res = this.administradorService.buscarPorId(this.id);
    if(res !== undefined)
      this.gerente = res;
    else
      throw new Error ("Gerente não encontrado: id = " + this.id);
  }

  atualizar(): void{
    if(!this.isButtonDisabled()){
      this.administradorService.atualizar(new Gerente(this.gerente.id, this.nome, this.gerente.cpf, this.email, this.telefone));
      this.router.navigate(["/admin/listar-gerentes"]);
    }
  }

  isButtonDisabled(): boolean {
    return (
      (this.nome === "" || !this.nome.match(/^[a-zA-ZáãàâéèêíîìóòôõúûùÁÀÃÂÉÈÊÍÌÎÓÒÔÕÚÙÛñÑÇç\s]+$/))
      || (this.email === "" || !this.email.match(/[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}/))
      || (this.telefone === "" || !this.telefone.match(/\(\d{2}\)\s\d{5}-\d{4}/))
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

  validateAndFormatTelefone(event: any): void {
    const previousValue = this.telefone;
    this.telefone = this.validationService.formatTelefone(event.target.value, previousValue);
    this.validateTelefone();
  }

  abrirPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '400px',
      data: {
        titulo: 'Editar Gerente',

        mensagem: 'Gerente atualizado com sucesso!',

        gifSrc: '../../../assets/gif/lingua.gif',

        musica2: new Audio('../../../assets/sound/coringa.mp3'),

        botaoText2: 'OK',

        onBotao2Click: () => {
          dialogRef.close();
        },

        mostrarBotaoVerde: true,
      },
    });
  }
}
