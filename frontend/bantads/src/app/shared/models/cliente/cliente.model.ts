import { Endereco } from "./endereco.model";

export class Cliente {
  constructor (
    public id?: number,
    public nome?: string,
    public email?: string,
    public cpf?: string,
    public telefone?: string,
    public salario?: string,
    public endereco?: Endereco,
  ) {}
}
