import { Component } from '@angular/core';
import { ContaService } from '../services';
import { ValidationService } from 'src/app/shared/services';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../shared/popup/popup.component';
import { Transferencia } from 'src/app/shared';


@Component({
  selector: 'cliente-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {

  private transferencia: Transferencia = new Transferencia("", "");

  private valorFocused: boolean = false;
  private valorValid: boolean = false;
  private valorError: string = "";

  private numConta: string = "";
  private numContaBlurred: boolean = false;
  private numContaValid: boolean = false;
  private numContaError: string = "";

  constructor(private validationService: ValidationService, private contaService: ContaService, private dialog: MatDialog) {}

  get valorTransferencia(): string {
    return this.transferencia.valor!;
  }

  set valorTransferencia(valor: string) {
    this.transferencia.valor = valor;
  }

  get isValorValid(): boolean {
    return this.valorValid;
  }

  get valorErrorText(): string {
    return this.valorError;
  }

  get valorBeenFocused(): boolean {
    return this.valorFocused;
  }

  setValorBeenFocused(): void {
    this.valorFocused = true;
    this.validateValor();
  }

  get numeroConta(): string {
    return this.numConta;
  }

  set numeroConta(numConta: string) {
    this.numConta = numConta;
  }

  get isNumContaValid(): boolean {
    return this.numContaValid;
  }

  get numContaErrorText(): string {
    return this.numContaError;
  }

  get numContaBeenBlurred(): boolean {
    return this.numContaBlurred;
  }

  setNumContaBeenBlurred(): void {
    this.numContaBlurred = true;
    this.validateNumConta();
  }

  validateValor(): void {
    let result = this.validationService.validateMoney(this.transferencia.valor!, this.valorBeenFocused);

    switch (result) {
      case "inválido": {
        this.valorValid = false;
        this.valorError = "Insira um valor válido!";
        return;
      }

      default: {
        if (Number(this.transferencia.valor!.replace(/[^\d,]/g, '').replace(',', '.')) > this.contaService.getSaldo()) {
          this.valorValid = false;
          this.valorError = "Seu saldo não é suficiente para essa operação!";
          return;
        }

        this.valorValid = true;
        this.valorError = "";
        return;
      }
    }
  }

  validateAndFormatValor(event: any): void {
    this.transferencia.valor = this.validationService.formatMoney(event.target.value);
    this.validateValor();
  }

  validateNumConta(): void {
    let result = this.validationService.validateNumConta(this.numConta, this.numContaBeenBlurred);

    switch (result) {
      case "inválido": {
        this.numContaValid = false;
        this.numContaError = "Insira um número de conta válido!";
        return;
      }

      default: {
        this.numContaValid = true;
        this.numContaError = "";
        return;
      }
    }
  }

  validateAndFormatNumConta(event: any): void {
    this.numConta = this.validationService.formatNumConta(event.target.value);
    this.validateNumConta();
  }

  isButtonDisabled(): boolean {
    let numberValor = Number(this.transferencia.valor!.replace(/[^\d,]/g, '').replace(',', '.'));

    return (
      (this.transferencia.valor === "" || isNaN(numberValor) || numberValor <= 0.00 || numberValor > 100000000)
      || (Number(this.transferencia.valor!.replace(/[^\d,]/g, '').replace(',', '.')) > this.contaService.getSaldo())
      || (this.numConta === "" || !this.numConta.match(/\d{2}\.\d{3}-\d{1}/))
    );
  }

  realizarTransferencia(): void {
    this.contaService.transferencia(this.transferencia);
  }

  abrirPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "400px",
      data: {
        titulo: "Transferência",

        mensagem: "Tem certeza que deseja realizar essa transferência?",

        gifSrc: "../../../assets/gif/huell.gif",

        botaoText1: "Cancelar",

        musica1: new Audio('../../../assets/sound/nandomouraditado.mp3'),

        onBotao1Click: () => {
          dialogRef.close();
        },

        botaoText2: "Confirmar",

        musica2: new Audio('../../../assets/sound/cristoronaldo.mp3'),

        onBotao2Click: () => {
          this.realizarTransferencia();
          dialogRef.close();
        },

        mostrarBotaoVermelho: true,
        mostrarBotaoVerde: true,
      },
    });
  }
}
