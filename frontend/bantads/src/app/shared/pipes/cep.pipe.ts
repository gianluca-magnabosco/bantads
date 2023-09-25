import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value) {
      value = value.replace(/\D/g, '');

      if (value.length > 8) {
        value = value.substring(0, 8);
      }

      switch (value.length) {
        case 3:
          value = value.replace(/(\d{2})(\d+)/, '$1.$2');
          break;
        case 4:
          value = value.replace(/(\d{2})(\d+)/, '$1.$2');
          break;
        case 5:
          value = value.replace(/(\d{2})(\d+)/, '$1.$2');
          break;
        case 6:
          value = value.replace(/(\d{2})(\d{3})(\d+)/, '$1.$2-$3');
          break;
        case 7:
          value = value.replace(/(\d{2})(\d{3})(\d+)/, '$1.$2-$3');
          break;
        case 8:
          value = value.replace(/(\d{5})(\d+)/, '$1-$2');
          break;
        default:
          return value;
      }
    }
    return value;
  }

}