import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthenRequest, AuthenResponse } from '../models/authen';
const BaseUrl = environment.ApiUrl;
const Endpoint = 'authentication';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  credentialSubject: BehaviorSubject<AuthenResponse | null>;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.credentialSubject = new BehaviorSubject<AuthenResponse | null>(JSON.parse(localStorage.getItem('credential') || '{}'));
  }

  get LoggedIn(): boolean { return !(JSON.stringify(this.credentialSubject.value) === '{}') }
  get GetCredential() { return this.credentialSubject.value; }

  Login = (model: AuthenRequest) => this.httpClient.post(`${BaseUrl}/${Endpoint}/Login`, model);

  Logout() {
    localStorage.removeItem('credential');
    this.credentialSubject.next(JSON.parse('{}'));
    this.router.navigateByUrl('/login');
  }
}
