import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

import { TransacoesService } from '../../../core/services/transacoes.service';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LoadingModule } from '../../../components/loading/loading.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          HttpClientTestingModule,
          MatInputModule,
          MatButtonModule,
          LoadingModule,
          ReactiveFormsModule,
          NoopAnimationsModule
      ],
      declarations: [ FormComponent ],
      providers: [
        TransacoesService,
        FormBuilder,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
