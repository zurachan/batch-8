import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Department } from '../models/department';
const BaseUrl = environment.ApiUrl;
const Endpoint = 'department';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private httpClient: HttpClient) { }
  getAll = (param: any) => this.httpClient.get(`${BaseUrl}/${Endpoint}`);
  getById = (id: number) => this.httpClient.get(`${BaseUrl}/${Endpoint}/${id}`);
  create = (model: Department) => this.httpClient.post(`${BaseUrl}/${Endpoint}`, model);
  update = (id: number, model: Department) => this.httpClient.put(`${BaseUrl}/${Endpoint}/${id}`, model);
  delete = (id: number) => this.httpClient.delete(`${BaseUrl}/${Endpoint}/${id}`);
}
