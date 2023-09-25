import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'cliente-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  saldoDoDia: number = 0;
  dataAtual: number = Date.now();
  transacoesDoDia: any[] = [];
  saldosPorDia: { data: string, saldo: number }[] = [];

  constructor(private datePipe: DatePipe) {}

  transacoes: any[] = [
    { nome: 'ElfBar INC', descricao: 'Pacote 100 Pods Sabor Baunilha', data: '01/09/2023', valor: -550 },
    { nome: 'CIEE', descricao: 'Bolsa-Auxílio', data: '04/09/2023', valor: 900 },
    { nome: 'Nubank', descricao: 'Venda Ilícita', data: '04/09/2023', valor: 500 },
    { nome: 'OnlyFans', descricao: 'Assinatura Anual Bluezão Premium Deluxe Maior Fã (Pietro)', data: '05/09/2023', valor: -100 },
    { nome: 'Valve', descricao: 'Skin - AK-47 | Hentaizao Lore ', data: '14/09/2023', valor: -150 },
    { nome: 'Nubank', descricao: 'Dívida xxmarcelo caloteiro', data: '14/09/2023', valor: 10 },
  ];

  ngOnInit() {
    this.calcularSaldo();
    this.calcularSaldoDoDia();
    this.calcularSaldosPorDia();
  }

  calcularSaldo() {
    let saldoTotal = 0;
  
    for (const transacao of this.transacoes) {
      saldoTotal += transacao.valor;
    }
  
    return saldoTotal;
  }
  
  calcularSaldosPorDia() {
    const datasUnicas = [...new Set(this.transacoes.map(transacao => transacao.data))];
    const datasPossiveis = this.gerarDatasPossiveis(); 
  
    this.saldosPorDia = datasPossiveis.map(data => {
      if (!data) {
        return { data: 'Sem dados', saldo: 0 };
      }
  
      const saldoDoDia = this.transacoes
        .filter(transacao => transacao.data === data)
        .reduce((acumulador, transacao) => acumulador + transacao.valor, 0);
  
      return { data, saldo: saldoDoDia };
    });
  }
  
  
  gerarDatasPossiveis() {
    const datasTransacoes = this.transacoes.map(transacao => transacao.data);
    const datasUnicas = [...new Set(datasTransacoes)];
    const dataAtual = new Date();
    const umMesAtras = new Date(dataAtual.getFullYear(), dataAtual.getMonth() - 1, dataAtual.getDate());
  
    const datasPossiveis = [];
  
    for (let data = umMesAtras; data <= dataAtual; data.setDate(data.getDate() + 1)) {
      const dataFormatada = this.datePipe.transform(data, 'dd/MM/yyyy');
      datasPossiveis.push(dataFormatada);
    }
  
    return datasPossiveis;
  }
  

  calcularSaldoDoDia() {
    const dataAtual = new Date();
    const dataAtualFormatada = this.datePipe.transform(dataAtual, 'dd/MM/yyyy');
  
    this.transacoesDoDia = this.transacoes.filter(transacao => transacao.data === dataAtualFormatada);
  
    this.saldoDoDia = 0;
  
    for (const transacao of this.transacoesDoDia) {
      this.saldoDoDia += transacao.valor;
    }
  }
  
  
  
}
