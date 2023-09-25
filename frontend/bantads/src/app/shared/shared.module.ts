import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { MatDividerModule } from '@angular/material/divider';
import { CpfPipe } from './pipes';
import { PhonePipe } from './pipes/phone.pipe';
import { CepPipe } from './pipes/cep.pipe';



@NgModule({
  declarations: [
    PopupComponent,
    CpfPipe, 
    PhonePipe, 
    CepPipe
  ],
  imports: [
    CommonModule,
    MatDividerModule,
  ]
})
export class SharedModule { }
