import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor() { }

  getGerentes(): any {
    return (
      [
        { nome: "Amigao", quantidade_clientes: "10", soma_saldos_positivos: "R$ 1003,00", soma_saldos_negativos: "R$ 302,00" },
        { nome: "Amigao", quantidade_clientes: "10", soma_saldos_positivos: "R$ 1003,00", soma_saldos_negativos: "R$ 302,00" },
        { nome: "Amigao", quantidade_clientes: "10", soma_saldos_positivos: "R$ 1003,00", soma_saldos_negativos: "R$ 302,00" },
        { nome: "Amigao", quantidade_clientes: "10", soma_saldos_positivos: "R$ 1003,00", soma_saldos_negativos: "R$ 302,00" },
        { nome: "Amigao", quantidade_clientes: "10", soma_saldos_positivos: "R$ 1003,00", soma_saldos_negativos: "R$ 302,00" },
      ]
    )
  }

}
