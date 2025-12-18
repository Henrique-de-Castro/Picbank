import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TableTransactionsModule } from './table/table-transactions.module';
import { BtnAddModule } from './btn-add/btn-add.module';
import { PaginatorModule } from './paginator/paginator.module';
import { LoadingModule } from '../../components/loading/loading.module';
import { DeleteModule } from './delete/delete.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableTransactionsModule,
    BtnAddModule,
    PaginatorModule,
    LoadingModule,
    DeleteModule
  ],
})
export class HomeModule {}
