import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotaoAdicionarComponent } from './botao-adicionar.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [BotaoAdicionarComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [BotaoAdicionarComponent]
})
export class BotaoAdicionarModule { }
