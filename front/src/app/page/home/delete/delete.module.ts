import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteComponent } from './delete.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingModule } from '../../../components/loading/loading.module';

@NgModule({
  declarations: [ DeleteComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    LoadingModule
  ],
  exports: [DeleteComponent]
})
export class DeleteModule { }
