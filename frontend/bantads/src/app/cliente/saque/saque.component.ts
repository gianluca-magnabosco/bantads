import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/shared/services';



@Component({
  selector: 'cliente-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  private saldoCliente: number = 0.00;
  private saldoColoring: string = "";
  private valor: string = "";

  private valorFocused: boolean = false;
  private valorValid: boolean = false;
  private valorError: string = "";

  constructor(private validationService: ValidationService) {}

  ngOnInit(): void {
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

  get valorSaque(): string {
    return this.valor;
  }

  set valorSaque(valor: string) {
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

  isButtonDisabled(): boolean {
    let numberValor = Number(this.valor.replace(/[^\d,]/g, '').replace(',', '.'));

    return (
      (this.valor === "" || isNaN(numberValor) || numberValor <= 0.00 || numberValor > 100000000)
      || (Number(this.valor.replace(/[^\d,]/g, '').replace(',', '.')) > Number(this.saldo.replace(/[^\d,]/g, '').replace(',', '.')))
    );
  }
}
