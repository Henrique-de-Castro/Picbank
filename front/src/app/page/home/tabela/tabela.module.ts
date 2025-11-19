import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './tabela.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [ TabelaComponent ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [ TabelaComponent ]
})
export class TabelaModule { }
