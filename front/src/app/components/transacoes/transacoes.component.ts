import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      tipo: ['', Validators.required],
      metodo: ['', Validators.required],
      valor: ['', Validators.required],
      data: ['', Validators.required]
    });
  }

  salvar(): void {
    console.log(this.form.value); 
    console.log(this.form.valid); 
  }

  cancelar(): void {
    this.router.navigate(['/home']);
  }
}
