import { Component, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginar',
  templateUrl: './paginar.component.html',
  styleUrls: ['./paginar.component.scss']
})
export class PaginarComponent {

  totalItems: number = 7;
  itemsPerPage: number = 1;
  opItemsPerPage: number[] = [1, 2, 3, 4, 5, 6, 7];

  @Output() change = new EventEmitter<{ page: number, perPage: number }>();

  onPageChange(event: PageEvent): void {
    this.change.emit({
      page: event.pageIndex + 1,   
      perPage: event.pageSize
    });
  }
}
