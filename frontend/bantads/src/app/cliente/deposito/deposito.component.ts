import { Component } from '@angular/core';
import { ValidationService } from 'src/app/shared/services';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../shared/popup/popup.component';
import { Deposito } from 'src/app/shared';
import { ContaService } from '../services';



@Component({
  selector: 'cliente-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent {

  private deposito: Deposito = new Deposito("");

  private valorFocused: boolean = false;
  private valorValid: boolean = false;
  private valorError: string = "";

  constructor(private contaService: ContaService, private validationService: ValidationService, private dialog: MatDialog) {}

  get valorDeposito(): string {
    return this.deposito.valor!;
  }

  set valorDeposito(valor: string) {
    this.deposito.valor = valor;
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

  validateValor(): void {
    let result = this.validationService.validateMoney(this.deposito.valor!, this.valorBeenFocused);

    switch (result) {
      case "inválido": {
        this.valorValid = false;
        this.valorError = "Insira um valor válido!";
        return;
      }

      default: {
        this.valorValid = true;
        this.valorError = "";
        return;
      }
    }
  }

  validateAndFormatValor(event: any): void {
    this.deposito.valor = this.validationService.formatMoney(event.target.value);
    this.validateValor();
  }

  isButtonDisabled(): boolean {
    let numberValor = Number(this.deposito.valor!.replace(/[^\d,]/g, '').replace(',', '.'));

    return (this.deposito.valor === "" || isNaN(numberValor) || numberValor <= 0.00 || numberValor > 100000000);
  }

  realizarDeposito(): void {
    this.contaService.depositar(this.deposito);
  }

  abrirConfirmacaoPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "400px",
      data: {
        titulo: "Sucesso!",

        mensagem: "Depósito realizado com sucesso!",

        gifSrc: "../../../assets/gif/huell.gif",

        botaoText2: "OK",

        musica2: new Audio('../../../assets/sound/queota.mp3'),

        onBotao2Click: () => {
          dialogRef.close();
        },

        mostrarBotaoVermelho: false,
        mostrarBotaoVerde: true,
      },
    });
  }

  abrirPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "400px",
      data: {
        titulo: "Depósito",

        mensagem: "Tem certeza que deseja realizar esse depósito?",

        gifSrc: "../../../assets/gif/money.gif",

        botaoText1: "Cancelar",

        musica1: new Audio('../../../assets/sound/whatsapp.mp3'),

        onBotao1Click: () => {
          dialogRef.close();
        },

        botaoText2: "Confirmar",

        musica2: new Audio('../../../assets/sound/queota.mp3'),

        onBotao2Click: () => {
          this.realizarDeposito();
          dialogRef.close();
          this.abrirConfirmacaoPopup();
          this.valorDeposito = "";
        },

        mostrarBotaoVermelho: true,
        mostrarBotaoVerde: true,
      },
    });
  }
}
