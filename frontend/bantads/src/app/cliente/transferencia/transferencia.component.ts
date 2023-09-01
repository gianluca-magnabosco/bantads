import { Component, OnInit } from '@angular/core';
import { ContaService } from '../services';
import { ValidationService } from 'src/app/shared/services';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../shared/popup/popup.component'; 



@Component({
  selector: 'cliente-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  private saldoCliente: number = 0.00;
  private saldoColoring: string = "";

  private valor: string = "";
  private valorFocused: boolean = false;
  private valorValid: boolean = false;
  private valorError: string = "";

  private numConta: string = "";
  private numContaBlurred: boolean = false;
  private numContaValid: boolean = false;
  private numContaError: string = "";

  constructor(private validationService: ValidationService, private contaService: ContaService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.saldoCliente = this.contaService.getSaldo();

    if (this.saldoCliente > 0) {
      this.saldoColoring = "text-green-600";
    } else if (this.saldoCliente < 0) {
      this.saldoColoring = "text-red-600"
    } else {
      this.saldoColoring = "text-blue-700";
    }
  }

  get saldo(): string {
    return `R$ ${this.saldoCliente.toFixed(2).replace(".", ",")}`;
  }

  get saldoColor(): string {
    return this.saldoColoring;
  }

  get valorTransferencia(): string {
    return this.valor;
  }

  set valorTransferencia(valor: string) {
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
    let result = this.validationService.validateMoney(this.valor, this.valorBeenFocused);

    switch (result) {
      case "inválido": {
        this.valorValid = false;
        this.valorError = "Insira um valor válido!";
        return;
      }

      default: {
        if (Number(this.valor.replace(/[^\d,]/g, '').replace(',', '.')) > Number(this.saldo.replace(/[^\d,]/g, '').replace(',', '.'))) {
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
    this.valor = this.validationService.formatMoney(event.target.value);
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
    let numberValor = Number(this.valor.replace(/[^\d,]/g, '').replace(',', '.'));

    return (
      (this.valor === "" || isNaN(numberValor) || numberValor <= 0.00 || numberValor > 100000000)
      || (Number(this.valor.replace(/[^\d,]/g, '').replace(',', '.')) > Number(this.saldo.replace(/[^\d,]/g, '').replace(',', '.')))
      || (this.numConta === "" || !this.numConta.match(/\d{2}\.\d{3}-\d{1}/))
    );
  }

  abrirPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '400px',
      data: {
        titulo: 'Tem certeza que deseja realizar essa transferência?',
        gifSrc: 'https://i.gifer.com/CsFC.gif',

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
