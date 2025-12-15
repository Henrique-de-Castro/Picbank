import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransacoesService } from 'src/app/core/services/transacoes.service';
import { Router, ActivatedRoute } from '@angular/router';

import { delay, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {

  form: FormGroup;
  enabledButton!: string;
  id!: string | null;
  loading: boolean = false;

  unsubscribe$: Subject<void>;

  constructor(private formBuilder: FormBuilder, private service: TransacoesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      tipo: ['', [Validators.required, Validators.minLength(3)]],
      metodo: ['', [Validators.required, Validators.minLength(3)]],
      valor: ['', Validators.required],
      data: ['', Validators.required],
    });
    this.enabledButton
    = 'accent'

    this.unsubscribe$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.loading = true;

    this.activatedRoute.paramMap.subscribe(
      (param) => { console.log("ID:", param.get('id'));
        this.id = param.get('id');

        if (this.id) {
          this.service.buscarTransacao(this.id).pipe(delay(1000), takeUntil(this.unsubscribe$)).subscribe(
              {
              next: (data) => {console.log(data)
                this.form.setValue({
                  tipo: data.tipo,
                  metodo: data.metodo,
                  valor: data.valor,
                  data: data.data
                });
                this.loading = false;
              },
              error: (erro) => {// console.error(erro);
                this.loading = false;
                alert('Não foi possível carregar os dados da transação! Erro na requisição.');
              }
              }
          );
        }
    }
  );
  }

  edit(): void {
    this.loading = true;

    this.service.editarTransacao(this.id!, this.form.value).subscribe(
      {
        next: (data) => {
          alert('Transação editada com sucesso!');
          this.form.reset();
          this.loading = false;
          this.router.navigate(['/home']);
        },
        error: (erro) => {
          alert('Não foi possível editar a transação! Erro na requisição.');
          this.loading = false;
        }
      }
    );
  }

  onDisabledButton(): string {
    if(this.form.invalid){
      this.enabledButton = 'disabled'
    }
    return this.enabledButton = 'accent'
  }

  ngOnDestroy(): void {
    console.log('Destruindo componente e finalizando inscrições');
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
