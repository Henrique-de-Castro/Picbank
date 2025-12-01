import { Component, OnInit } from '@angular/core';
import { TransacoesService } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  dataSource: any[] = [];

  currentPage: number = 1;
  currentPerPage: number = 1;

  constructor(private service: TransacoesService) {}

  ngOnInit(): void {
    this.listarTransacoes();
  }

  listarTransacoes(): void {
    this.service.listarTransacoes(this.currentPage, this.currentPerPage)
      .subscribe((data) => {
        this.dataSource = Array.isArray(data) ? data : data?.data || [];
      });
  }

  onPaginationChange(event: { page: number, perPage: number }): void {
    this.currentPage = event.page;
    this.currentPerPage = event.perPage;
    this.listarTransacoes();
  }
}
