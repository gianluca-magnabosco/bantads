import { Component } from '@angular/core';
import { ValidationService } from 'src/app/shared/services';

@Component({
  selector: 'gerente-inicio',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent {
  private cpfInput: string = "";
  private cpfBlurred: boolean = false;
  private cpfValid: boolean = false;
  private cpfError: string = "";

  constructor(private validationService: ValidationService) {}

  get cpf(): string {
    return this.cpfInput;
  }

  set cpf(cpf: string) {
    this.cpfInput = cpf;
  }

  get isCpfValid(): boolean {
    return this.cpfValid;
  }

  get cpfErrorText(): string {
    return this.cpfError;
  }

  get cpfBeenBlurred(): boolean {
    return this.cpfBlurred;
  }

  setCpfBeenBlurred(): void {
    this.cpfBlurred = true;
    this.validateCpf();
  }

  buscarCliente() {
    // aqui o scriptzin pra buscar o cliente, fiz essa simulação aq so pra ver como ia ficar
  }

  isButtonDisabled(): boolean {
    return (
      this.cpf === "" || !this.validationService.innerValidateCpf(this.cpf)
    );
  }

  validateCpf(): void {
    let result = this.validationService.validateCpf(this.cpf, this.cpfBeenBlurred);

    switch (result) {
      case "inválido": {
        this.cpfValid = false;
        this.cpfError = "Insira um CPF válido!";
        return;
      }

      default: {
        this.cpfValid = true;
        this.cpfError = "";
        return;
      }
    }
  }

  validateAndFormatCpf(event: any): void {
    this.cpf = this.validationService.formatCpf(event.target.value);
    this.validateCpf();
  }
}

