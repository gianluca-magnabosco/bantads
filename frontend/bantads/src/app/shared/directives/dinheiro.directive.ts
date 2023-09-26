import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDinheiroFormat]'
})
export class DinheiroFormatDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = this.formatDinheiro(value);
    event.target.value = `R$ ${formattedValue}`;
  }

  private formatDinheiro(value: string): string {
    const number = parseFloat(value) / 100;
    return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
