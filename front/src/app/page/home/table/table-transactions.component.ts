import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'table-transactions',
  templateUrl: './table-transactions.component.html',
  styleUrls: ['./table-transactions.component.scss']
})
export class TableTransactionsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'tipo', 'metodo', 'valor', 'data', 'editar', 'deletar'];
  @Input() transactionsData!: any[]

  items: number = 5;
  itemsOptions!: [5, 10, 20];
  pages!: number;
  pageEvent!: PageEvent;

  @Output() deleteId = new EventEmitter<{id: string, deleteActive: boolean}>();

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  //PAGINACAO
  setItemsOptions(items: number){
    this.items = items;
  }

  sendIdUpdate(id: number){
    this.router.navigate(['/editar', id]);
  }

  sendIdDelete(id: string){ {
    this.deleteId.emit({ id: id, deleteActive: true });
  }
  }
}
