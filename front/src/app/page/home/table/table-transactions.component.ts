import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'table-transactions',
  templateUrl: './table-transactions.component.html',
  styleUrls: ['./table-transactions.component.scss']
})
export class TableTransactionsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'tipo', 'metodo', 'valor', 'data', 'editar'];
  @Input() transactionsData!: any[]
  loading: boolean = false;

  items: number = 5;
  itemsOptions!: [5, 10, 20];
  pages!: number;
  pageEvent!: PageEvent;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  //PAGINACAO
  setItemsOptions(items: number){
    this.items = items;
  }
  sendId(id: number){
    this.router.navigate(['/editar', id]);
  }
}
