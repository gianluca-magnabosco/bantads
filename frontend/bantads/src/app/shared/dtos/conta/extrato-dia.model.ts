import { HistoricoMovimentacoes } from "../../models";

export class ExtratoDia {
  constructor (
    public data?: string,
    public saldo?: string,
    public movimentacoes?: HistoricoMovimentacoes[],
  ) {}
}
