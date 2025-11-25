import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginarComponent } from './paginar.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [PaginarComponent],
  imports: [
    CommonModule, MatPaginatorModule
  ],
  exports: [
    PaginarComponent
  ]
})
export class PaginarModule { }
