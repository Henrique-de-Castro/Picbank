import { Component, OnInit } from '@angular/core';
import { TransacoesService } from 'src/app/core';

interface TransacaoDataList {
  data: any[]; //transacoes, sao os objetos do json
  first: number; //paginacao
  last: number; //paginacao
  next: number; //paginacao
  items: number; //quantos itens existem
  pages: number; //total de paginas
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //demonstracao dos dados que estamos recebendo
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
      descricao: 'cartao de crédito',
      valor: 250,
      data: '2025-02-21',
    },
  ];

  // o ! é para mostrar ao typescript que essa variavel nao foi inicializada
  listaDados!: TransacaoDataList; //variavel que recebe os dados vindos do servico no formato TransacaoDatalist(a interface)
  dataSource: any[] = []; //alimentar a tabela no HTML

  constructor(private service: TransacoesService) {}

  ngOnInit(): void {
    this.listarTransacoes();
  }

  listarTransacoes(): void {
    this.service.listarTransacoes(1, 5).subscribe((data) => {
      this.listaDados = data;
      this.dataSource = data.data

      console.log(this.dataSource);
    });
  }
}
