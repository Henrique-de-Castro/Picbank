import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FormEditComponent } from './form-edit.component';
import { LoadingModule } from '../../../components/loading/loading.module';

@NgModule({
  declarations: [FormEditComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    LoadingModule
  ],
  exports: [FormEditComponent]
})
export class FormEditModule { }
