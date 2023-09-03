import { Endereco } from "../../models";

export class Cadastro {
  constructor (
    public nome?: string,
    public email?: string,
    public cpf?: string,
    public telefone?: string,
    public salario?: string,
    public endereco?: Endereco,
  ) {}
}
