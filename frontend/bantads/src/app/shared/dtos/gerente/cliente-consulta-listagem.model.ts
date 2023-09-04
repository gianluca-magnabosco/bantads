export class ClienteConsultaListagem {
  constructor (
    public id?: number,
    public nome?: string,
    public cpf?: string,
    public cidade?: string,
    public estado?: string,
    public saldo?: number,
  ) {}
}
