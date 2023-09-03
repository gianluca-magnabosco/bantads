import { HistoricoMovimentacoes } from "../../models";

export class ExtratoDia {
  constructor (
    public saldo?: string,
    public historicoMovimentacoes?: HistoricoMovimentacoes[],
  ) {}
}
