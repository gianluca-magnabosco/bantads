import { Component } from '@angular/core';
import { ValidationService } from 'src/app/shared/services';
import { ContaService } from '../services';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../shared/popup/popup.component';
import { Saque } from 'src/app/shared';



@Component({
  selector: 'cliente-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent {

  private saque: Saque = new Saque("");

  private valorFocused: boolean = false;
  private valorValid: boolean = false;
  private valorError: string = "";

  constructor(private validationService: ValidationService, private contaService: ContaService, private dialog: MatDialog) {}

  get valorSaque(): string {
    return this.saque.valor!;
  }

  set valorSaque(valor: string) {
    this.saque.valor = valor;
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
    let result = this.validationService.validateMoney(this.saque.valor!, this.valorBeenFocused);

    switch (result) {
      case "inválido": {
        this.valorValid = false;
        this.valorError = "Insira um valor válido!";
        return;
      }

      default: {
        if (Number(this.saque.valor!.replace(/[^\d,]/g, '').replace(',', '.')) > this.contaService.getSaldo()) {
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
    this.saque.valor = this.validationService.formatMoney(event.target.value);
    this.validateValor();
  }

  isButtonDisabled(): boolean {
    let numberValor = Number(this.saque.valor!.replace(/[^\d,]/g, '').replace(',', '.'));

    return (
      (this.saque.valor === "" || isNaN(numberValor) || numberValor <= 0.00 || numberValor > 100000000)
      || (Number(this.saque.valor!.replace(/[^\d,]/g, '').replace(',', '.')) > this.contaService.getSaldo())
    );
  }

  realizarSaque(): void {
    this.contaService.sacar(this.saque);
  }

  abrirPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "400px",
      data: {
        titulo: "Saque",

        mensagem: "Tem certeza que deseja realizar o saque?",

        gifSrc: "../../../assets/gif/palpatine.gif",

        botaoText1: "Cancelar",

        musica1: new Audio('../../../assets/sound/queota.mp3'),

        onBotao1Click: () => {
          dialogRef.close();
        },

        botaoText2: "Confirmar",

        musica2: new Audio('../../../assets/sound/queota.mp3'),

        onBotao2Click: () => {
          this.realizarSaque();
          dialogRef.close();
        },
      },
    });
  }
}
