import { Injectable } from '@angular/core';
import { Cadastro } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  cadastrar(cadastroDTO: Cadastro): void {
    console.log(cadastroDTO);
  }
}
