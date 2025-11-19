import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  disposicaoColunas: string[] = ['id', 'tipo', 'metodo', 'valor', 'data'];

  @Input() dadosTabela!: any[]

  constructor() {
  }

  ngOnInit(): void {
  }

}
