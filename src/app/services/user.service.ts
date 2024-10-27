import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

const BaseUrl = environment.ApiUrl;
const Endpoint = 'user';
// const mockApi = 'https://reqres.in/api/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get<User[]>(`${BaseUrl}` + Endpoint).pipe();
  }

  create(model: User): Observable<any> {
    return this.httpClient.post(`${BaseUrl}` + Endpoint, model).pipe();
  }
}
