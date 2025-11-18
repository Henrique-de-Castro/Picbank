import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { RouterModule } from '@angular/router';
import { TableModule } from './table/table.module';
import { BotaoModule } from './botao/botao.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HeaderModule,
    TableModule,
    BotaoModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
