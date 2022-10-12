import { Injectable } from '@angular/core';
import { clientI } from '../../model/client.interface'
import { PetitionI } from '../../model/petition.interface'
import { ResponseI } from '../../model/response.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:4000/';

  constructor(private http: HttpClient) {
  }

  loginBy(form: clientI): Observable<ResponseI> {
    let dir = this.url + "autenticar"
    return this.http.post<ResponseI>(dir, {
      "username": form.username,
      "password": form.password
    })
  }

  petitionBy(form: PetitionI): Observable<ResponseI> {
    let dir = this.url + "links/client/petition"
    return this.http.post<ResponseI>(dir, {
      "client_id": form.client_id,
      "email": form.email,
      "des": form.des,
    })
  }


}
