import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Input() informacoes: any[] = [];
  colunasExibidas: string[] = ['id', 'tipo', 'metodo', 'valor', 'data'];


}
