import { Component } from '@angular/core';

@Component({
  selector: 'cliente-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  private saldoCliente: number = 0.00;

  get saldo(): number {
    return this.saldoCliente;
  }

  get saldoFormatado(): string {
    return `R$ ${this.saldo.toFixed(2).replace(".", ",")}`;
  }

}
