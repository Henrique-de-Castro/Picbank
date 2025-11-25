import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginar',
  templateUrl: './paginar.component.html',
  styleUrls: ['./paginar.component.scss']
})
export class PaginarComponent implements OnInit {

  // total de registros que vêm do backend
  totalItems: number = 100;

  // atual page size
  itemsPerPage: number = 5;

  // opções de quantidade por página
  opItemsPerPage: number[] = [5, 10, 20];

  // manda número da página atual
  @Output() page = new EventEmitter<number>();

  // manda quantidade por página
  @Output() perPage = new EventEmitter<number>();

  ngOnInit(): void {
    // valores padrão já passados, se quiser pode receber via @Input()
  }

  onPageChange(event: PageEvent): void {
    this.page.emit(event.pageIndex + 1); // pagina atual (base 1)
    this.perPage.emit(event.pageSize);   // quantidade por página selecionada
  }
}
