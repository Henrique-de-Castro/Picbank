import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { RouterModule } from '@angular/router';
import { TableModule } from './components/table/table.module';
import { HttpClientModule } from '@angular/common/http';
import { PaginarModule } from './components/paginar/paginar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HeaderModule,
    TableModule,
    PaginarModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
