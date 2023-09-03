import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cliente-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent {

  @Input() modo!: string;
  @Output() modoChange = new EventEmitter<string>();

  onModoChange(newModo: string) {
    this.modo = newModo;
    this.modoChange.emit(this.modo);
  }

}
