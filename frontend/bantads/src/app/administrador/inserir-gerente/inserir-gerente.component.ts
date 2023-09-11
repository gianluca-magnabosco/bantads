import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gerente } from 'src/app/shared';
import { AdministradorService } from '../services';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../shared/popup/popup.component';

@Component({
  selector: 'app-inserir-gerente',
  templateUrl: './inserir-gerente.component.html',
  styleUrls: ['./inserir-gerente.component.css']
})
export class InserirGerenteComponent implements OnInit {
@ViewChild('formGerente') formGerente! : NgForm;
gerente! : Gerente;

constructor(
  private administradorService : AdministradorService,
  private router: Router,
  private dialog: MatDialog,
){}

ngOnInit(): void {
    this.gerente = new Gerente();
}

inserir(): void{
  if(this.formGerente.form.valid){
    this.administradorService.inserir(this.gerente);
    this.router.navigate(["/admin/listar-gerentes"]);
  }
}

abrirPopup(): void {
  const dialogRef = this.dialog.open(PopupComponent, {
    width: '400px',
    data: {
      titulo: 'Adicionar Gerente', 

      mensagem: 'Você adicionou o gerente com sucesso!', 

      gifSrc: '../../../assets/gif/lingua.gif', 

      musica2: new Audio('../../../assets/sound/coringa.mp3'), 


      botaoText2: 'Ok', 

      onBotao2Click: () => { 
        dialogRef.close();
        
         },
      mostrarCampoTexto: false,    
      mostrarBotaoVermelho: false, 
      mostrarBotaoVerde: true,  
      
    },
  });
}


}
