import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  colunasExibidas: string[] = ['id', 'tipo', 'metodo', 'valor', 'data'];

  informacoes = [
  {
    id: "1",
    tipo: "entrada",
    metodo: "pix",
    valor: 3500,
    data: "2025-02-20"
  },
  {
    id: "2",
    tipo: "saida",
    metodo: "cartao",
    valor: 220,
    data: "2025-03-01"
  },
  {
    id: "3",
    tipo: "entrada",
    metodo: "boleto",
    valor: 980,
    data: "2025-01-15"
  },
  {
    id: "4",
    tipo: "entrada",
    metodo: "transferencia",
    valor: 7200,
    data: "2025-02-05"
  },
  {
    id: "5",
    tipo: "saida",
    metodo: "pix",
    valor: 145,
    data: "2025-02-28"
  },
  {
    id: "6",
    tipo: "saida",
    metodo: "dinheiro",
    valor: 60,
    data: "2025-03-03"
  },
  {
    id: "7",
    tipo: "entrada",
    metodo: "cartao",
    valor: 4100,
    data: "2025-03-10"
  }
];


}
