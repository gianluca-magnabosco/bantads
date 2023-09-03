export class Endereco {
  constructor (
    public cep?: string,
    public tipo?: string,
    public logradouro?: string,
    public numero?: string,
    public complemento?: string,
    public cidade?: string,
    public estado?: string,
  ) {}
}
