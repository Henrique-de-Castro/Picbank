import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TabelaModule } from './tabela/tabela.module';
import { BotaoAdicionarModule } from './botao-adicionar/botao-adicionar.module';
import { PaginadorModule } from './paginador/paginador.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, TabelaModule, BotaoAdicionarModule, PaginadorModule],
})
export class HomeModule {}
