import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginar',
  templateUrl: './paginar.component.html',
  styleUrls: ['./paginar.component.scss']
})
export class PaginarComponent {

  constructor(private router: Router) {}

  irParaForms() {
    this.router.navigate(['/transacoes/nova']);
  }

  removerTransacao() {
    console.log('Removido!!!!!');
  }

  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 1;
  @Input() opItemsPerPage: number[] = [];

  @Output() change = new EventEmitter<{ page: number, perPage: number }>();

  onPageChange(event: PageEvent): void {
    this.change.emit({
      page: event.pageIndex + 1,
      perPage: event.pageSize
    });
  }
}
