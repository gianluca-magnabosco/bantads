import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor() { }

  getSaldo(): number {
    return 1.50;
  }
}
