import { Component, OnInit } from '@angular/core';
import { TransacoesService } from '../../core/services/transacoes.service';
import { PageEvent } from '@angular/material/paginator';

import { delay, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

interface TransacoesDataList {
  data: any[];
  first: number;
  last: number;
  next: number;
  items: number;
  pages: number;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  dataTransactions!: TransacoesDataList;
  transactionsList: any[] = [];
  pageIndex: number = 0;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 20];
  loading: boolean = false;
  deleteId!: string;
  deleteActive: boolean = false;

  unsubscribe$: Subject<void>;

  constructor(private service: TransacoesService) {
    this.unsubscribe$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.listTransactions();
  }

  listTransactions(): void {
  const page = this.pageIndex + 1;
  const perPage = this.pageSize;

  this.loading = true;

  this.service.listarTransacoes(page, perPage)
    .pipe(
      delay(1000),
      map((res: TransacoesDataList) => ({
        data: res.data,
        items: res.items
      })),
      takeUntil(this.unsubscribe$)
    )
    .subscribe({
      next: ({ data, items }) => {
        this.transactionsList = data;
        this.dataTransactions = { ...this.dataTransactions, items };
      },
      error: (err) => {
        console.error('Erro ao buscar transações', err);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.listTransactions();
  }

  sendDeleteId(event: { id: string, deleteActive: boolean }): void {
    this.deleteId = event.id;
    this.deleteActive = event.deleteActive;
  }

  ngOnDestroy(): void {
    console.log('Destruindo componente e finalizando inscrições');
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
