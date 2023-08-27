import { Injectable } from '@angular/core';
import { CadastroDTO } from '../dtos/cadastro.dto';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  cadastrar(cadastroDTO: CadastroDTO): void {
    console.log(cadastroDTO);
  }
}
