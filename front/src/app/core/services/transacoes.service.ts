import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransacoesService {
  constructor(private http: HttpClient) {}

  //CREATE
  salvarTransacoes(body: any): Observable<any> {
    return this.http.post(
      `http://localhost:3000/transacoes`, body,
    ).pipe(delay(3000));
  }


  //READ
  listarTransacoes(page: number, perPage: number): Observable<any> {
    return this.http.get(
      `http://localhost:3000/transacoes?_page=${page}&_per_page=${perPage}`
    );
  }
  buscarTransacao(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/transacoes/${id}`).pipe(delay(3000));
  }


  //UPDATE
  editarTransacao(id: string, body: any): Observable<any> {
    return this.http.put(`http://localhost:3000/transacoes/${id}`, body).pipe(delay(3000));
  }
}
