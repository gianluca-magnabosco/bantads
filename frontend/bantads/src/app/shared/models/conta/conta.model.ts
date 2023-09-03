import { ContaCliente } from "./conta-cliente.model";
import { ContaGerente } from "./conta-gerente.model";
import { HistoricoMovimentacoes } from "./historico-movimentacoes.model";

export class Conta {
  constructor (
    public id?: number,
    public numero?: string,
    public dataCriacao?: string,
    public limite?: string,
    public cliente?: ContaCliente,
    public gerente?: ContaGerente,
    public historico?: HistoricoMovimentacoes[],
  ) {}
}
