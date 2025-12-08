import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransacoesService } from 'src/app/core/services/transacoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  enabledButton!: string;

  @Input() id!: number;

  constructor(private formBuilder: FormBuilder, private service: TransacoesService, private router: Router) {
    this.form = this.formBuilder.group({
      tipo: ['', [Validators.required, Validators.minLength(3)]],
      metodo: ['', [Validators.required, Validators.minLength(3)]],
      valor: ['', Validators.required],
      data: ['', Validators.required],
    });
    this.enabledButton
    = 'accent'
  }

  ngOnInit(): void {}

  save(): void {
  if (this.form.valid) {
    this.service.salvarTransacoes(this.form.value).subscribe({
      next: (response) => {
        alert('Transação salva com sucesso!');
        this.form.reset();
        this.router.navigate(['/home']);

        console.log(response);
      },
      error: (erro) => {
        alert('Não foi possível adicionar a transação! Erro na requisição.');

        console.error(erro);
      }
    });
  }
}


  onDisabledButton(): string {
    if(this.form.invalid){
      this.enabledButton = 'disabled'
    }
    return this.enabledButton = 'accent'
  }
}
