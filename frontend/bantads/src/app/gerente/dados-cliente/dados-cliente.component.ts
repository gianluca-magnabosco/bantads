import { Component } from '@angular/core';
import { Cliente, Endereco } from 'src/app/shared';

@Component({
  selector: 'gerente-inicio',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css']
})
export class DadosClienteComponent {
  cliente!: Cliente;

  numConta: string = "69.420-1";
  limite: string = "R$ 1210,35";
  saldo: string = "R$ 420,69";
  gerente: string = "Seu Creyson";

  constructor() {
    this.cliente = new Cliente(1, "Gianluca", "gianluca.notari@ufpr.br", "115.687.529-38", "(47) 99908-1684", "R$ 2.420,69", new Endereco("89300-152", "Rua", "Governador Jorge Lacerda", "420", "Casa", "Mafra", "Santa Catarina"));
  }
}
