import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransacoesService } from 'src/app/core/services/transacoes.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  enabledButton!: string;
  @Input() id!: number;
  loading: boolean = false;

  unsubscribe$: Subject<void>;

  constructor(private formBuilder: FormBuilder, private service: TransacoesService, private router: Router) {
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

  ngOnInit(): void {}

  save(): void {
    this.loading = true;

    if (this.form.valid) {
      this.service.salvarTransacoes(this.form.value).pipe(takeUntil(this.unsubscribe$)).subscribe(
        {
          next: (response) => {// console.log(response);
            alert('Transação salva com sucesso!');
            this.form.reset();
            this.loading = false;
            this.router.navigate(['/home']);
          },
          error: (erro) => {// console.error(erro);
            alert('Não foi possível adicionar a transação! Erro na requisição.');
            this.loading = false;
          }
        }
      );
    }
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
