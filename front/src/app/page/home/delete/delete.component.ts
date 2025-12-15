import { Component, OnInit, Input } from '@angular/core';

import { TransacoesService } from 'src/app/core/services/transacoes.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() id!: string | null;
  loading: boolean = false;

  constructor(private service: TransacoesService, private router: Router) { }

  ngOnInit(): void {
  }

  delete(){
    this.loading = true;
    this.service.deletarTransacao(this.id!).pipe(delay(2000)).subscribe({
      next: (data) => {
        this.loading = false;
        alert('Transação deletada com sucesso!');
        this.router.navigate(['/home']).then(() => {
          window.location.reload();

      });
        },
      error: (err) => {
        this.loading = false;
        alert('Erro ao deletar a transação. Tente novamente.');
        }
      }
    )
  }

}
