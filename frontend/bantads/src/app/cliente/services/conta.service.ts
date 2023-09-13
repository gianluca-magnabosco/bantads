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




// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable, EventEmitter } from '@angular/core';
// import { LoginService } from 'src/app/entrar/services';
// import { Deposito, Saldo, Saque, Transferencia } from 'src/app/shared';
// import { take } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContaService {

//   private url: string = "http://localhost:3000/conta";
//   private headers: HttpHeaders = new HttpHeaders().set(
//     "x-access-token",
//     this.loginService.token
//   );

//   constructor(private http: HttpClient, private loginService: LoginService) { }

//   getSaldo() {
//     return this.http.get<Saldo>(`${this.url}/saldo`, { headers: this.headers });
//   }

//   depositar(deposito: Deposito) {
//     return this.http.put(`${this.url}/deposito`, deposito, { headers: this.headers }).pipe(take(1));
//   }

//   sacar(saque: Saque) {
//     return this.http.put(`${this.url}/saque`, saque, { headers: this.headers }).pipe(take(1));
//   }

//   transferencia(transferencia: Transferencia) {
//     return this.http.put(`${this.url}/transferencia`, transferencia, { headers: this.headers }).pipe(take(1));
//   }
// }
