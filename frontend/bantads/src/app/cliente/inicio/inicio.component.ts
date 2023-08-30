import { Component, OnInit } from '@angular/core';
import { ContaService } from '../services';

@Component({
  selector: 'cliente-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private saldoCliente: number = 0.00;
  private saldoColoring: string = "";

  constructor(private contaService: ContaService) {}

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

}
