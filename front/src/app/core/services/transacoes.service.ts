import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransacoesService {
  constructor(private http: HttpClient) {}

  listarTransacoes(page: number, perPage: number): Observable<any> {
    return this.http.get(
      `http://localhost:3000/transacoes?_page=${page}&_per_page=${perPage}`
    );
  }
}
