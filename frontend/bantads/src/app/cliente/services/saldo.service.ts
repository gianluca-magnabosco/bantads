import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  constructor() { }

  getSaldo(): number {
    return 1.50;
  }
}
