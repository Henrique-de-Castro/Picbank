import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableTransactionsComponent } from './table-transactions.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ TableTransactionsComponent ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule
],
  exports: [ TableTransactionsComponent ]
})
export class TableTransactionsModule { }
