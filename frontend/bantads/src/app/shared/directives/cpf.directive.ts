import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCpfFormat]'
})
export class CpfFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value = event.target.value.replace(/\D/g, '');

    if (value.length <= 11) {
      event.target.value = this.formatCpf(value);
    } else {
      event.target.value = value.slice(0, 11);
    }
  }

  private formatCpf(value: string): string {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
