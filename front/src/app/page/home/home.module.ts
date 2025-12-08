import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TableTransactionsModule } from './table/table-transactions.module';
import { BtnAddModule } from './btn-add/btn-add.module';
import { PaginatorModule } from './paginator/paginator.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableTransactionsModule,
    BtnAddModule,
    PaginatorModule
  ],
})
export class HomeModule {}
