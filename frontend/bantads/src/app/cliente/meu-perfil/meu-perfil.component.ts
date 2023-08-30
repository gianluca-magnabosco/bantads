import { Component } from '@angular/core';



@Component({
  selector: 'cliente-alterar',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent {

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
