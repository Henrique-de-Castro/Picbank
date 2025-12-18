import { TestBed } from '@angular/core/testing';

import { TransacoesService } from './transacoes.service';

import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('TransacoesService', () => {
  let service: TransacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransacoesService]
    });
    service = TestBed.inject(TransacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
