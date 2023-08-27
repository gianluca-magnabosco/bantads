import { EnderecoDTO } from "./endereco.dto";

export interface CadastroDTO {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  salario: string;
  endereco: EnderecoDTO;
}
