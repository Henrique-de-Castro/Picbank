import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotaoRoutingModule } from './botao-routing.module';
import { BotaoComponent } from './botao.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [BotaoComponent],
  imports: [
    CommonModule,
    BotaoRoutingModule,
    MatButtonModule
  ]
  ,
  exports: [BotaoComponent]
})
export class BotaoModule { }
