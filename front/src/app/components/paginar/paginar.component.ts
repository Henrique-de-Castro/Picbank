import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginar',
  templateUrl: './paginar.component.html',
  styleUrls: ['./paginar.component.scss']
})

export class PaginarComponent implements OnInit {

  totalItems: number = 100;
  itemsPerPage: number = 5;
  opItemsPerPage: number[] = [5, 10, 20];

  @Output() page = new EventEmitter<number>();
  @Output() perPage = new EventEmitter<number>();

  ngOnInit(): void {}

  onPageChange(event: PageEvent): void {
    this.page.emit(event.pageIndex + 1); // base 1
    this.perPage.emit(event.pageSize);
  }
}
