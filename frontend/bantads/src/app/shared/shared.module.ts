import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { MatDividerModule } from '@angular/material/divider';
import { CpfPipe } from './pipes';
import { PhonePipe } from './pipes/phone.pipe';
import { CepPipe } from './pipes/cep.pipe';
import { CepFormatDirective } from './directives/cep.directive';
import { CpfFormatDirective } from './directives/cpf.directive';
import { TelefoneFormatDirective } from './directives/telefone.directive';
import { DinheiroFormatDirective } from './directives/dinheiro.directive';

@NgModule({
  declarations: [
    PopupComponent,
    CpfPipe, 
    PhonePipe, 
    CepPipe,
    CepFormatDirective,
    CpfFormatDirective,
    TelefoneFormatDirective,
    DinheiroFormatDirective,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
  ]
})
export class SharedModule { }
