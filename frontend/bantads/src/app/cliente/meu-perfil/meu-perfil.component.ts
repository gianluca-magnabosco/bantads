import { Component } from '@angular/core';

@Component({
  selector: 'cliente-alterar',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent {

  private modoExibicao: string = "visualizar";

  private gerenteDoCliente: string = "Seu Creyson";

  get gerente(): string {
    return this.gerenteDoCliente;
  }

  get modo(): string {
    return this.modoExibicao;
  }

  set modo(modo: string) {
    this.modoExibicao = modo;
  }

  onModoChange(newModo: string) {
    this.modo = newModo;
  }
}
