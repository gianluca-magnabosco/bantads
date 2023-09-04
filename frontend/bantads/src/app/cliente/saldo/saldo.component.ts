import { Component, OnInit } from '@angular/core';
import { ContaService } from '../services';

@Component({
  selector: 'cliente-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {
  private saldoCliente!: number;
  private saldoColoring!: string;

  constructor(private contaService: ContaService) {}

  ngOnInit(): void {
    this.saldoCliente = this.contaService.getSaldo();
    this.setSaldoColoring();

    this.contaService.saldoUpdated.subscribe((newSaldo) => {
      this.saldoCliente = newSaldo;
      this.setSaldoColoring();
    });
  }

  get saldo(): number {
    return this.saldoCliente;
  }

  get saldoColor(): string {
    return this.saldoColoring;
  }

  setSaldoColoring(): void {
    if (this.saldoCliente > 0) {
      this.saldoColoring = "text-green-600";
    } else if (this.saldoCliente < 0) {
      this.saldoColoring = "text-red-600";
    } else {
      this.saldoColoring = "text-blue-700";
    }
  }
}
