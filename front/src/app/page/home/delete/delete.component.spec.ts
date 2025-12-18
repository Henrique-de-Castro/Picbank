import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComponent } from './delete.component';

import { TransacoesService } from '../../../core/services/transacoes.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingModule } from '../../../components/loading/loading.module';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        LoadingModule
      ],
      declarations: [
        DeleteComponent
      ],
      providers: [ TransacoesService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
