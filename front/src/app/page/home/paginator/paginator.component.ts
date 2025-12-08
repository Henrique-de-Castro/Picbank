import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() length!: number;
  pageIndex!: number;
  pageSizeOptions!: number[];
  pageSize!: number;

  @Output() pageP = new EventEmitter<number>();
  @Output() perPageP = new EventEmitter<number>();

  constructor() {
    this.pageIndex = 1;
    this.pageSizeOptions = [5, 10, 20];
    this.pageSize = 5;
  }

  ngOnInit(): void {
    this.pageP.emit(this.pageIndex);
    this.perPageP.emit(this.pageSize);
  }

  onPageChange(event: PageEvent): void {
    if (event.previousPageIndex !== undefined) {
      this.pageIndex = event.pageIndex + 1;
      this.pageP.emit(this.pageIndex);
    }
    if (event.pageSize !== this.pageSize) {
      this.pageSize = event.pageSize;
    }
    this.perPageP.emit(this.pageSize);
  }
}
