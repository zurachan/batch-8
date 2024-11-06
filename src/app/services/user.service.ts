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
  constructor(private httpClient: HttpClient) { }
  closeModal$ = new Subject();
  closeModal(reason?: any) { this.closeModal$.next(reason) }

  getAll = () => this.httpClient.get(`${BaseUrl}/${Endpoint}`);
  getById = (id: number) => this.httpClient.get(`${BaseUrl}/${Endpoint}/${id}`);
  create = (model: User) => this.httpClient.post(`${BaseUrl}/${Endpoint}`, model);
  update = (id: number, model: User) => this.httpClient.put(`${BaseUrl}/${Endpoint}/${id}`, model);
  delete = (id: number) => this.httpClient.delete(`${BaseUrl}/${Endpoint}/${id}`);
}
