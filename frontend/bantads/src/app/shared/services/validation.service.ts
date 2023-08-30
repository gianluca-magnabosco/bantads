import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateEmail(email: string, emailBeenBlurred: boolean): string {
    if (!emailBeenBlurred) {
      return "";
    }

    if (email === "") {
      return "vazio";
    }

    if (!email.match(/[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}/)) {
      return "inválido";
    }

    return "";
  }

  validatePassword(password: string, passwordBeenBlurred: boolean): string {
    if (!passwordBeenBlurred) {
      return "";
    }

    if (password === "") {
      return "vazio";
    }

    return "";
  }

  validateNome(nome: string, nomeBeenBlurred: boolean): string {
    if (!nomeBeenBlurred) {
      return "";
    }

    if (nome === "") {
      return "vazio";
    }

    if (!nome.match(/^[a-zA-ZáãàâéèêíîìóòôõúûùÁÀÃÂÉÈÊÍÌÎÓÒÔÕÚÙÛñÑÇç\s]+$/)) {
      return "inválido";
    }

    return "";
  }

  validateCpf(cpf: string, cpfBeenBlurred: boolean): string {
    if (!cpfBeenBlurred) {
      return "";
    }

    if (cpf === "") {
      return "vazio";
    }

    if (!this.innerValidateCpf(cpf)) {
      return "inválido";
    }

    return "";
  }

  validateTelefone(telefone: string, telefoneBeenBlurred: boolean): string {
    if (!telefoneBeenBlurred) {
      return "";
    }

    if (telefone === "") {
      return "vazio";
    }

    if (!telefone.match(/\(\d{2}\)\s\d{5}-\d{4}/)) {
      return "inválido";
    }

    return "";
  }

  validateMoney(moneyAmount: string, moneyAmountBeenBlurred: boolean): string {
    if (!moneyAmountBeenBlurred) {
      return "";
    }

    if (moneyAmount === "") {
      return "vazio";
    }

    const numericValue = Number(moneyAmount.replace(/[^\d,]/g, '').replace(',', '.'));

    if (isNaN(numericValue) || numericValue <= 0.00 || numericValue > 100000000) {
      return "inválido";
    }

    return "";
  }

  validateCep(cep: string, cepBeenBlurred: boolean): string {
    if (!cepBeenBlurred) {
      return "";
    }

    if (cep === "") {
      return "vazio";
    }

    if (!cep.match(/\d{5}-\d{3}/)) {
      return "inválido";
    }

    return "";
  }

  validateNumero(numero: string, numeroBeenBlurred: boolean): string {
    if (!numeroBeenBlurred) {
      return "";
    }

    if (numero === "") {
      return "vazio";
    }

    if (Number(numero) <= 0 || Number(numero) > 100000) {
      return "inválido";
    }

    return "";
  }

  validateComplemento(complemento: string, complementoBeenBlurred: boolean): string {
    if (!complementoBeenBlurred) {
      return "";
    }

    if (complemento === "") {
      return "vazio";
    }

    return "";
  }

  validateNumConta(numConta: string, numContaBeenBlurred: boolean): string {
    if (!numContaBeenBlurred) {
      return "";
    }

    if (!numConta.match(/\d{2}\.\d{3}-\d{1}/)) {
      return "inválido";
    }

    return "";
  }

  innerValidateCpf(value: string): boolean {
    if (!value.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/)) {
      return false;
    }

    value = value.replace(/[\.-]/g, "");

    let n: number = 0;
    let m: number = 0;
    for (let i: number = 9; i < 11; i++) {
      for (n = 0, m = 0; m < i; m++) {
        n += parseFloat(value[m]) * ((i + 1) - m);
      }
      n = ((10 * n) % 11) % 10;
      if (parseFloat(value[m]) != n) {
        return false;
      }
    }

    return true;
  }

  formatCpf(cpf: string): string {
    let formattedCpf = cpf;

    if (cpf.length === 3 || cpf.length === 7) formattedCpf += ".";
    if (cpf.length === 4 && cpf[3] !== ".") formattedCpf = cpf.substring(0, 3) + "." + cpf.substring(3, 4);
    if (cpf.length === 8 && cpf[7] !== ".") formattedCpf = cpf.substring(0, 7) + "." + cpf.substring(7, 8);
    if (cpf.length === 11) formattedCpf += "-";
    if (cpf.length === 12 && cpf[11] !== "-") formattedCpf = cpf.substring(0, 11) + "-" + cpf.substring(11, 12);

    return formattedCpf;
  }

  formatTelefone(telefone: string, previousValue: string): string {
    let formattedTelefone = telefone;

    if (telefone.length === 1 && telefone[0] !== "(") formattedTelefone = "(" + telefone;
    if (telefone.length === 3 && telefone.length > previousValue.length) formattedTelefone += ") ";
    if (telefone.length === 4 && telefone[3] !== ")") formattedTelefone = telefone.substring(0, 3) + ") " + telefone.substring(3, 4);
    if (telefone.length === 5 && telefone[4] !== " ") formattedTelefone = telefone.substring(0, 4) + " " + telefone.substring(4, 5);
    if (telefone.length === 10) formattedTelefone += "-";
    if (telefone.length === 11 && telefone[10] !== "-") formattedTelefone = telefone.substring(0, 10) + "-" + telefone.substring(10, 11);

    return formattedTelefone;
  }

  formatMoney(moneyAmount: string): string {
    const numericInput = moneyAmount.replace(/\D/g, "");
    let formattedMoneyAmount = Number(numericInput) / 100;

    if (formattedMoneyAmount < 0) {
      formattedMoneyAmount = 0;
    }

    return formattedMoneyAmount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  formatCep(cep: string): string {
    let formattedCep = cep;

    if (cep.length === 5) formattedCep += "-";
    if (cep.length === 6 && cep[5] !== "-") formattedCep = cep.substring(0, 5) + "-" + cep.substring(5, 6);

    return formattedCep;
  }

  formatNumConta(numConta: string): string {
    let formattedNumConta = numConta;

    if (numConta.length === 2) formattedNumConta += ".";
    if (numConta.length === 3 && numConta[2] !== ".") formattedNumConta = numConta.substring(0, 2) + "." + numConta.substring(2, 3);
    if (numConta.length === 6) formattedNumConta += "-";
    if (numConta.length === 7 && numConta[6] !== "-") formattedNumConta = numConta.substring(0, 6) + "-" + numConta.substring(6, 7);

    return formattedNumConta;
  }
}
