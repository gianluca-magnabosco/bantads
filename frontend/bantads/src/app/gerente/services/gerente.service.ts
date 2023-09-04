import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  constructor() { }

  getPedidosPendentesAprovacao(): any {
    return (
      [
        { id: "1", nome: "Alef Manga", cpf: "837.456.721-21", salario: "R$ 12000,00" },
        { id: "2", nome: "Marina Silva", cpf: "164.285.129-65", salario: "R$ 5000,32" },
        { id: "3", nome: "Zé da Manga", cpf: "194.347.285-92", salario: "R$ 1254,43" },
        { id: "4", nome: "James da Salada de Fruta", cpf: "873.831.762-67", salario: "R$ 950,21" },
        { id: "5", nome: "Bluezao", cpf: "012.845.786-72", salario: "R$ 10,01" },
      ]
    )
  }
}
