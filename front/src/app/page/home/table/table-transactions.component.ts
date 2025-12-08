import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'table-transactions',
  templateUrl: './table-transactions.component.html',
  styleUrls: ['./table-transactions.component.scss']
})
export class TableTransactionsComponent implements OnInit {

  //TABELA
  displayedColumns: string[] = ['id', 'tipo', 'metodo', 'valor', 'data'];
  @Input() transactionsData!: any[]

  //PAGINAÇÃO
  items: number = 5;
  itemsOptions!: [5, 10, 20];
  pages!: number;
  pageEvent!: PageEvent;

  constructor() {
  }

  ngOnInit(): void {
  }

  //PAGINACAO
  setItemsOptions(items: number){
    this.items = items;
  }
}
