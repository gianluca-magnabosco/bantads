import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClienteService } from '../../services';
import { Cliente } from 'src/app/shared';

@Component({
  selector: 'cliente-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  @Input() modo!: string;
  @Output() modoChange = new EventEmitter<string>();

  private dadosCliente!: Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cliente = this.clienteService.getCliente();
  }

  get cliente(): Cliente {
    return this.dadosCliente;
  }

  set cliente(cliente: Cliente) {
    this.dadosCliente = cliente;
  }

  onModoChange(newModo: string) {
    this.modo = newModo;
    this.modoChange.emit(this.modo);
  }

}
