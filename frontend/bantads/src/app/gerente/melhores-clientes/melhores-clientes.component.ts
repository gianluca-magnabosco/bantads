import { Component } from '@angular/core';
import { ClienteConsultaListagem } from 'src/app/shared';
import { ValidationService } from 'src/app/shared/services';
import { GerenteService } from '../services';

@Component({
  selector: 'app-melhores-clientes',
  templateUrl: './melhores-clientes.component.html',
  styleUrls: ['./melhores-clientes.component.css']
})
export class MelhoresClientesComponent {
  melhoresClientes!: ClienteConsultaListagem[];
  filteredClientes!: ClienteConsultaListagem[];

  constructor(private validationService: ValidationService, private gerenteService: GerenteService) {
    this.melhoresClientes = this.gerenteService.getMelhoresClientes();
    this.filteredClientes = this.melhoresClientes;
    this.ordenarPorSaldo();
  }

  ordenarPorSaldo() {
    this.filteredClientes.sort((a, b) => (b.saldo ?? 0) - (a.saldo ?? 0));
  }
  
  



  }


