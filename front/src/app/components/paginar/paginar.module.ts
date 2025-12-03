import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginarComponent } from './paginar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PaginarComponent],
  imports: [
    CommonModule, MatPaginatorModule, MatButtonModule
  ],
  exports: [
    PaginarComponent
  ]
})
export class PaginarModule { }
