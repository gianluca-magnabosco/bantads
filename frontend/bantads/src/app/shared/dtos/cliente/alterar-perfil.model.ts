import { Endereco } from "../../models";

export class AlterarPerfil {
  constructor (
    public nome?: string,
    public email?: string,
    public telefone?: string,
    public salario?: string,
    public endereco?: Endereco,
  ) {}
}
