import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
