import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { MatInputModule }  from '@angular/material/input';
import { FormModule } from './form/form.module';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    MatInputModule,
    FormModule
  ],
  exports: [
    CreateComponent
  ]
})
export class CreateModule { }
