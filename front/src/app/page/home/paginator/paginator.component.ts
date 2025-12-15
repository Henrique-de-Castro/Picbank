import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input() length!: number;
  @Input() pageIndex: number = 0;
  @Input() pageSize: number = 5;
  @Input() pageSizeOptions: number[] = [5, 10, 20];

  @Output() pageEvent = new EventEmitter<PageEvent>();

  constructor(){}

  ngOnInit(): void {}

  sendPageEvent(event: PageEvent): void {
    this.pageEvent.emit(event);
  }
}
