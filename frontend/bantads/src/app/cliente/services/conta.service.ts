import { Injectable, EventEmitter } from '@angular/core';
import { Deposito, Saque, Transferencia } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private saldo: number = 1.50;

  saldoUpdated = new EventEmitter<number>();

  constructor() { }

  getSaldo(): number {
    return this.saldo;
  }

  depositar(deposito: Deposito): void {
    this.saldo += Number(deposito.valor!.replace(/[^\d,]/g, '').replace(',', '.'));
    this.saldoUpdated.emit(this.saldo);
  }

  sacar(saque: Saque): void {
    this.saldo -= Number(saque.valor!.replace(/[^\d,]/g, '').replace(',', '.'));
    this.saldoUpdated.emit(this.saldo);
  }

  transferencia(transferencia: Transferencia): void {
    this.saldo -= Number(transferencia.valor!.replace(/[^\d,]/g, '').replace(',', '.'));
    this.saldoUpdated.emit(this.saldo);
  }
}
