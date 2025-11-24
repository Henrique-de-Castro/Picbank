import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TableModule } from 'src/app/components/table/table.module';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, TableModule, MatPaginatorModule],
})
export class HomeModule {}
