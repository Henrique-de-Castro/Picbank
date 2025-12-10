import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableTransactionsComponent } from './table-transactions.component';

import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ TableTransactionsComponent ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
],
  exports: [ TableTransactionsComponent ]
})
export class TableTransactionsModule { }
