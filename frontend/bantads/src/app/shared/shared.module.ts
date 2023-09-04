import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
  ]
})
export class SharedModule { }
