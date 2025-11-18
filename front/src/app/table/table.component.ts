import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  id: number;
  mundial: number;
  libertadores: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nome: 'Santos', mundial: 2, libertadores: '3'},
  {id: 2, nome: 'São Paulo', mundial: 3, libertadores: '3'},
  {id: 3, nome: 'Palmeiras', mundial: 0, libertadores: '3'},
  {id: 4, nome: 'Cruzeiro', mundial: 0, libertadores: '2'},
  {id: 5, nome: 'Fluminense', mundial: 0, libertadores: '1'},
  {id: 6, nome: 'Flamengo', mundial: 1, libertadores: '3'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'mundial', 'libertadores'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
