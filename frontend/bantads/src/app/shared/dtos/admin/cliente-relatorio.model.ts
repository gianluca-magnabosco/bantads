export class ClienteRelatorio {
  constructor (
    public nome?: string,
    public cpf?: string,
    public limite?: number,
    public saldo?: number,
    public gerente?: string,
  ) {}
}
