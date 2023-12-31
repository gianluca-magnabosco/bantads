import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

  /*  ---- Mini tutorial para adicionar um popupzin no seu component ----

  1 - Vá para o component que voce quer colocar o popup (ex: saque.component.ts)
  2 - Faça a importação do MatDialog e do PopupComponent
  3 - Insira a seguinte classe dentro de um constructor "private dialog: MatDialog"
  4 - Adicione o seguinte codigo no component
    abrirPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '400px',
      data: {
        titulo: 'xxxxxxxxxx', // Insira o titulo do popup

        mensagem: 'xxxxxxxxxx', // Insira a mensagem que vc quer colocar

        gifSrc: 'xxxxxxxxxx', // Insira o gif que vc quer colocar

        musica1: new Audio('xxxxxxxxxxxxxx'), //Adicione o Som 1 para o botão 1
        musica2: new Audio('xxxxxxxxxxxxxx'), //Adicione o Som 2 para o botão 2

        botaoText1: 'xxxxxxxxxx', // Insira o texto do botão vermelho

        onBotao1Click: () => { // Insira a ação do botao vermelho
          console.log('botao 1');
        },

        botaoText2: 'xxxxxxxxxx', // Insira o texto do botão verde

        onBotao2Click: () => { // Insira a ação do botão verde
          console.log('botao 2');
           },
        mostrarCampoTexto: true,    //Se deseja mostrar um textfield
        mostrarBotaoVermelho: true, //Se deseja mostrar o botão vermelho (Botão 1)
        mostrarBotaoVerde: true,  //Se deseja mostrar o botão verde (Botão 2)

      },
    });

  5 - Vá para o arquivo HTML e insira o seguinte codigo no botão para dar trigger no popup

                                   (click)="abrirPopup()"


  */

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  mostrarCampoTexto: boolean = false;
  titulo: string;
  mensagem: string;
  gifSrc: string;
  botaoText1: string;
  botao1Disabled: boolean;
  onBotao1Click: () => void;
  botaoText2: string;
  botao2Disabled: boolean;
  onBotao2Click: () => void;
  musica1: HTMLAudioElement;
  musica2: HTMLAudioElement;


  @ViewChild('campoTexto') campoTexto!: ElementRef;

  constructor (
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.titulo = data.titulo;
    this.mensagem = data.mensagem;
    this.gifSrc = data.gifSrc;

    this.musica1 = data.musica1;
    this.botaoText1 = data.botaoText1;
    this.botao1Disabled = data.botao1Disabled;
    this.onBotao1Click = () => {
      data.onBotao1Click();
      this.tocarMusica1();
    }

    this.musica2 = data.musica2;
    this.botaoText2 = data.botaoText2;
    this.botao2Disabled = data.botao2Disabled;
    this.onBotao2Click = () => {
      data.onBotao2Click();
      this.tocarMusica2();
    }
  }


  handleCampoTextoInput(event: any): void {
    if (event.target.value.length > 5) {
      this.botao2Disabled = false;
    } else {
      this.botao2Disabled = true;
    }
  }

  isBotao1Disabled(): boolean {
    return this.botao1Disabled;
  }

  isBotao2Disabled(): boolean {
    return this.botao2Disabled;
  }

  fecharPopup(): void {
    this.dialogRef.close();
  }

  tocarMusica1(): void {
    if (this.musica1) {
      this.musica1.play();
    }
  }

  tocarMusica2(): void {
    if (this.musica2) {
      this.musica2.play();
    }
  }
}
