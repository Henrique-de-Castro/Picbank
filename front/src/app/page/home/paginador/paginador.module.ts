import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginadorComponent } from './paginador.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [PaginadorComponent],
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  exports: [ PaginadorComponent ]
})
export class PaginadorModule { }
