import { Component, OnInit } from '@angular/core';
import { TransacoesService } from 'src/app/core';

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

  page!: number;
  perPage!: number;
  pageSize!: number;

  constructor(private service: TransacoesService) {}

  ngOnInit(): void {
    this.listTransactions();
  }

  setPage(pageIndex: number) {
    this.page = pageIndex;
    this.listTransactions();
  }

  setPerPage(pageSize: number) {
    this.perPage = pageSize;
    this.listTransactions();
  }


  listTransactions(): void {
    this.service.listarTransacoes(this.page, this.perPage).subscribe((APIresponse) => {
      this.dataTransactions = APIresponse;
      this.transactionsList = APIresponse.data;
      console.log(APIresponse);
    });
  }
}
