import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferenciaComponent } from './transferencia.component';


@NgModule({
  declarations: [
    TransferenciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TransferenciaModule { }
