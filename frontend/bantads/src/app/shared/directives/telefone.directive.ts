import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTelefoneFormat]'
})
export class TelefoneFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value = event.target.value.replace(/\D/g, '');

    if (value.length === 11) {
      event.target.value = this.formatTelefone(value);
    } else {
      event.target.value = value.slice(0, 11);
    }
  }

  private formatTelefone(value: string): string {
    return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
}
