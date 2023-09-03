
import { Cliente } from "../cliente/cliente.model";
import { TipoTransacao } from "./tipo-transacao";

export class HistoricoMovimentacoes {
  constructor (
    public data?: string,
    public tipoTransacao?: TipoTransacao,
    public origem?: Cliente,
    public destino?: Cliente,
    public valor?: string,
  ) {}
}
