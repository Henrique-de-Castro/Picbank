import { Component, OnInit } from '@angular/core';
import { TransacoesService } from 'src/app/core';

interface TransacaoDataList {
  data: any[];
  first: number;
  items: number;
  last: number;
  next: number;
  pages: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  DATA_MOCK = [
    {
      id: '1',
      tipo: 'entrada',
      metodo: 'pix',
      valor: 3500,
      data: '2025-02-20',
    },
    {
      id: '2',
      tipo: 'saida',
      descricao: 'carto de crédito',
      valor: 250,
      data: '2025-02-21',
    },
  ];
  data!: TransacaoDataList;

  constructor(private service: TransacoesService) {}

  ngOnInit(): void {
    this.listarTransacoes();
  }

  listarTransacoes(): void {
    this.service.listarTransacoes(1, 5).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
