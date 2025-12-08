import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtnAddComponent } from './btn-add.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BtnAddComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [BtnAddComponent, RouterModule]
})
export class BtnAddModule { }
