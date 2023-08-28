import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaqueComponent } from './saque.component';


@NgModule({
  declarations: [
    SaqueComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SaqueModule { }
