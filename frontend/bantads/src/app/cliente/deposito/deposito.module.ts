import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositoComponent } from './deposito.component';


@NgModule({
  declarations: [
    DepositoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DepositoModule { }
