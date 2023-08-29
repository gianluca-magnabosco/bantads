import { Component } from '@angular/core';



@Component({
  selector: 'cliente-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent {

  private saldoCliente: number = 0.00;
  private gerenteDoCliente: string = "Seu Creyson";

  get saldo(): number {
    return this.saldoCliente;
  }

  get saldoFormatado(): string {
    return `R$ ${this.saldo.toFixed(2).replace(".", ",")}`;
  }

  get gerente(): string {
    return this.gerenteDoCliente;
  }
}
