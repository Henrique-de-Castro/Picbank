import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TableModule } from 'src/app/components/table/table.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginarModule } from 'src/app/components/paginar/paginar.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, TableModule, MatPaginatorModule, PaginarModule
  ],
})
export class HomeModule {}
