import { TipoTransacao } from "./tipo-transacao";

export class HistoricoMovimentacoes {
  constructor (
    public data?: string,
    public tipoTransacao?: TipoTransacao,
    public contaOrigem?: string,
    public contaDestino?: string,
    public valor?: string,
  ) {}
}
