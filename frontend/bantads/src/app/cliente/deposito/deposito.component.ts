import { Component } from '@angular/core';
import { ValidationService } from 'src/app/shared/services';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../shared/popup/popup.component';



@Component({
  selector: 'cliente-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent {

  private valor: string = "";

  private valorFocused: boolean = false;
  private valorValid: boolean = false;
  private valorError: string = "";

  constructor(private validationService: ValidationService, private dialog: MatDialog) {}

  get valorDeposito(): string {
    return this.valor;
  }

  set valorDeposito(valor: string) {
    this.valor = valor;
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
    let result = this.validationService.validateMoney(this.valor, this.valorBeenFocused);

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
    this.valor = this.validationService.formatMoney(event.target.value);
    this.validateValor();
  }

  isButtonDisabled(): boolean {
    let numberValor = Number(this.valor.replace(/[^\d,]/g, '').replace(',', '.'));

    return (this.valor === "" || isNaN(numberValor) || numberValor <= 0.00 || numberValor > 100000000);
  }

  abrirPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '400px',
      data: {
        titulo: 'Tem certeza que deseja realizar esse depósito?',
        gifSrc: 'https://media.tenor.com/CbJpPU0xVjwAAAAM/star-wars.gif',

        onBotao1Click: () => {
          console.log('botao 1');

        },
        onBotao2Click: () => {
          console.log('botao 2');

        },

      },
    });
}
}
