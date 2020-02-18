import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {
  getJokeParam = 'value';

  url = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) { }


 executarPedidoGet() {

  return this.http.get(this.url);
 }

}
