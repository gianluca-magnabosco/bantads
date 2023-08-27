import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  constructor() { }

  getPedidosPendentesAprovacao(): any {
    return (
      [
        { id: "1", nome: "Amigao", cpf: "111.111.111-11", salario: "R$ 1500,00" },
        { id: "2", nome: "Amigao", cpf: "111.111.111-11", salario: "R$ 1500,00" },
        { id: "3", nome: "Amigao", cpf: "111.111.111-11", salario: "R$ 1500,00" },
        { id: "4", nome: "Amigao", cpf: "111.111.111-11", salario: "R$ 1500,00" },
        { id: "5", nome: "Amigao", cpf: "111.111.111-11", salario: "R$ 1500,00" },
      ]
    )
  }
}
