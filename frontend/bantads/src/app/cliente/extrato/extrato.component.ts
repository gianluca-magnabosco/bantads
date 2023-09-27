import { Component, OnInit } from '@angular/core';
import { Extrato, TipoTransacao } from 'src/app/shared';
import { ContaService } from '../services';

@Component({
  selector: 'cliente-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  extrato!: Extrato;

  conta: string = "69.420-1";

  constructor(private contaService: ContaService) {}

  ngOnInit(): void {
    this.extrato = this.contaService.getHistoricoMovimentacoes();
  }

  getCorTextoTransacao(tipoTransacao: TipoTransacao, contaOrigem: string): string {
    if (tipoTransacao === TipoTransacao.DEPOSITO || (tipoTransacao === TipoTransacao.TRANSFERENCIA && contaOrigem !== this.conta)) {
      return "text-blue-600";
    }

    if (tipoTransacao === TipoTransacao.SAQUE || (tipoTransacao === TipoTransacao.TRANSFERENCIA && contaOrigem === this.conta)) {
      return "text-red-600";
    }

    return "text-white";
  }

}
