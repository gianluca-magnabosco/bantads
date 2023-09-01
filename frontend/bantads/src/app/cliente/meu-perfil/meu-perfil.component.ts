import { Component, OnInit } from '@angular/core';
import { ContaService } from '../services';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../shared/popup/popup.component'; 


@Component({
  selector: 'cliente-alterar',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  private saldoCliente: number = 0.00;
  private saldoColoring: string = "";

  private gerenteDoCliente: string = "Seu Creyson";

  constructor(private contaService: ContaService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.saldoCliente = this.contaService.getSaldo();

    if (this.saldoCliente > 0) {
      this.saldoColoring = "text-green-600";
    } else if (this.saldoCliente < 0) {
      this.saldoColoring = "text-red-600"
    } else {
      this.saldoColoring = "text-blue-700";
    }
  }

  get saldo(): string {
    return `R$ ${this.saldoCliente.toFixed(2).replace(".", ",")}`;
  }

  get saldoColor(): string {
    return this.saldoColoring;
  }

  get gerente(): string {
    return this.gerenteDoCliente;
  }

  abrirPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '400px',
      data: {
        titulo: 'Tem certeza que deseja alterar seu perfil?',
        gifSrc: 'https://media.tenor.com/fCYvprWxVnIAAAAM/luntry-luntryifunny.gif',

        onBotao1Click: () => {
          console.log('botao 1');

        },
        onBotao2Click: () => {
          console.log('botao 2');

        },

      },
    });


  }
}
