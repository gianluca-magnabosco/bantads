import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { PopupComponent } from 'src/app/shared/popup/popup.component';

@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ]
})
export class NavbarComponent {

  constructor(private dialog: MatDialog, private router: Router) {}

  abrirPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "400px",
      data: {
        titulo: "Sair",

        mensagem: "Tem certeza que deseja sair da sua conta?",

        gifSrc: "../../../assets/gif/emoji.gif",

        botaoText1: "Cancelar",

        musica1: new Audio('../../../assets/sound/kanyeeast.mp3'),

        onBotao1Click: () => {
          dialogRef.close();
        },

        botaoText2: "Deslogar",

        musica2: new Audio('../../../assets/sound/farid.mp3'),

        onBotao2Click: () => {
          dialogRef.close();
          this.router.navigate(["/entrar"]);
        },

        mostrarBotaoVermelho: true, 
        mostrarBotaoVerde: true,
      },
    });
  }
}
