import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCepFormat]'
})
export class CepFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value = event.target.value.replace(/\D/g, '');

    if (value.length === 8) {
      event.target.value = this.formatCep(value);
    } else {
      event.target.value = value.slice(0, 8);
    }
  }

  private formatCep(value: string): string {
    return value.replace(/(\d{5})(\d{3})/, '$1-$2');
  }
}
