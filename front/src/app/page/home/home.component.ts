import { Component, OnInit } from '@angular/core';
import { TransacoesService } from 'src/app/core/services/transacoes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataSource: any[] = [];

  currentPage = 1;
  currentPerPage = 1;
  totalItems = 0;

  constructor(private service: TransacoesService) {}

  ngOnInit(): void {
    this.loadTransacoes();
  }

  loadTransacoes() {
    this.service
      .listarTransacoes(this.currentPage, this.currentPerPage)
      .subscribe((res: any) => {
        this.dataSource = res.data || res; 
        this.totalItems = res.items || res.total || 67; 
      });
  }

  onPaginationChange(event: any) {
    this.currentPage = event.page;
    this.currentPerPage = event.perPage;
    this.loadTransacoes();
  }
}
