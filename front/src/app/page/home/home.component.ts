import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  dados!: TransacoesDataList;
  listaTransacoes: any[] = [];

  page!: number;
  perPage!: number;
  pageSize!: number;

  constructor(private service: TransacoesService) {}

  ngOnInit(): void {
    this.buscarTransacoes();
  }

  receberPage(pageIndex: number) {
    this.page = pageIndex;
    this.buscarTransacoes();
  }

  receberPerPage(pageSize: number) {
    this.perPage = pageSize;
    this.buscarTransacoes();
  }


  buscarTransacoes(): void {
    this.service.listarTransacoes(this.page, this.perPage).subscribe((respostaAPI) => {
      this.dados = respostaAPI;
      this.listaTransacoes = respostaAPI.data;
      console.log(respostaAPI);
    });
  }
}
