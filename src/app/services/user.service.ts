import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

const BaseUrl = environment.ApiUrl;
const Endpoint = 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  closeModal$ = new Subject();
  closeModal(reason?: any) {
    this.closeModal$.next(reason);
  }

  getAll(): Observable<any> {
    return this.httpClient.get<User[]>(`${BaseUrl}` + Endpoint).pipe();
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get<User>(BaseUrl + Endpoint + '/' + id).pipe();
  }

  create(model: User): Observable<any> {
    return this.httpClient.post(`${BaseUrl}` + Endpoint, model).pipe();
  }

  update(id: number, model: User): Observable<any> {
    return this.httpClient.put(BaseUrl + Endpoint + '/' + id, model).pipe();
  }

  delete(id: number): Observable<any> {
    return this.httpClient
      .delete<boolean>(BaseUrl + Endpoint + '/' + id)
      .pipe();
  }
}
