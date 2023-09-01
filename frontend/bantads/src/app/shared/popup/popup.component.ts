import { Component, Inject } from '@angular/core';
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
        titulo: 'xxxxxxxxxx', //Insira a mensagem que vc quer colocar
        gifSrc: 'xxxxxxxxxx', //Insira o gif que vc quer colocar

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
  gifSrc: string;
  onBotao1Click: () => void; 
  onBotao2Click: () => void; 


  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.gifSrc = data.gifSrc; 
    this.onBotao1Click = data.onBotao1Click; 
    this.onBotao2Click = data.onBotao2Click; 
  }

  fecharPopup(): void {
    this.dialogRef.close();
  }
}
