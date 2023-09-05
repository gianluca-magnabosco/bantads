import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services/gerente.service';
import { ClienteAprovacao } from 'src/app/shared';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../shared/popup/popup.component';

@Component({
  selector: 'gerente-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private pedidosPendentesAprovacao!: ClienteAprovacao[];

  constructor(private gerenteService: GerenteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pedidosPendentesAprovacao = this.gerenteService.getPedidosPendentesAprovacao();
  }

  get listaPedidosPendentesAprovacao(): ClienteAprovacao[] {
    return this.pedidosPendentesAprovacao;
  }

  sortKey: keyof ClienteAprovacao = "nome";
  sortAsc = false;

  sortData(key: keyof ClienteAprovacao = this.sortKey): void {
    if (key === this.sortKey) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
      this.sortKey = key;
    }

    this.pedidosPendentesAprovacao.sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === 'string' && typeof valB === 'string') {
        return this.sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      } else if (typeof valA === 'number' && typeof valB === 'number') {
        return this.sortAsc ? valA - valB : valB - valA;
      } else {
        return 0;
      }
    });
  }

  abrirPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        titulo: 'Recusar Cliente',

        mensagem: 'Qual foi o motivo para a recusa do cliente?',

        gifSrc: '../../../assets/gif/nerd.gif',

        botaoText1: 'Fechar',
        musica1: new Audio('../../../assets/sound/copaonamao.mp3'),
        onBotao1Click: () => dialogRef.close(),

        botaoText2: 'Concluir',
        musica2: new Audio('../../../assets/sound/johncena.mp3'),

        mostrarCampoTexto: true,
        mostrarBotaoVermelho: true,
        mostrarBotaoVerde: true,

        

      }
    });
  }

  abrirPopupdois(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        titulo: 'Aprovar Cliente',

        mensagem: 'Cliente Aprovado ! ',

        gifSrc: '../../../assets/gif/lingua.gif',

        onBotao2Click: () => dialogRef.close(),

        botaoText2: 'Concluir',
        musica2: new Audio('../../../assets/sound/maketheL.mp3'),
        mostrarBotaoVerde: true
        

      }
    });
  }
}
