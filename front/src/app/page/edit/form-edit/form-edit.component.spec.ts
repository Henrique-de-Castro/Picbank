import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditComponent } from './form-edit.component';

import { TransacoesService } from '../../../core/services/transacoes.service';
import { FormBuilder } from '@angular/forms';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingModule } from '../../../components/loading/loading.module';

describe('FormEditComponent', () => {
  let component: FormEditComponent;
  let fixture: ComponentFixture<FormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        LoadingModule
      ],
      declarations: [ FormEditComponent ],
      providers: [
        TransacoesService,
        FormBuilder
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
