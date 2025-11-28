import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss']
})
export class PaginadorComponent implements OnInit {

  @Input() length!: number;
  pageIndex!: number;
  pageSizeOptions!: number[];
  pageSize!: number;

  @Output() pageP = new EventEmitter<number>;
  @Output() perPageP = new EventEmitter<number>;

  constructor() {
    this.pageIndex = 1;
    this.pageSizeOptions = [5, 10, 20];
    this.pageSize = 5;
  }

  ngOnInit(): void {
    this.pageP.emit(this.pageIndex);
    this.perPageP.emit(this.pageSize);
  }

  trocouPagina(evento: PageEvent){
    if (evento.previousPageIndex !== undefined){
      this.pageP.emit(evento.pageIndex + 1);
    }

    if(evento.pageSize !== this.pageSize) {
      this.pageSize = evento.pageSize
    }
    this.perPageP.emit(evento.pageSize)
  }

}
