import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlterarComponent } from './alterar.component';


@NgModule({
  declarations: [
    AlterarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AlterarModule { }
