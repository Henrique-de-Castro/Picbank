import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelaComponent } from './tabela.component';

import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ TabelaComponent ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule
],
  exports: [ TabelaComponent ]
})
export class TabelaModule { }
