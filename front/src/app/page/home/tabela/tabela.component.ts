import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  //TABELA
  disposicaoColunas: string[] = ['id', 'tipo', 'metodo', 'valor', 'data'];
  @Input() dadosTabela!: any[]

  //PAGINAÇÃO
  items: number = 5;
  itemsOptions!: [5, 10, 20];
  pages!: number;
  pageEvent!: PageEvent;

  constructor() {
  }

  ngOnInit(): void {
  }

  //PAGINACAO
  setItemsOptions(items: number){
    this.items = items;
  }
}
