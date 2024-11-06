import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticateService, private fb: FormBuilder, private router: Router) { }
  form!: FormGroup;

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  OnClickLogin() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return
    let model = this.form.getRawValue();

    this.authService.Login(model).subscribe((res: any) => {
      if (res.success) {
        this.authService.credentialSubject.next(res);
        localStorage.setItem('credential', JSON.stringify(res));
        this.router.navigate(['']);
        return {
          isOk: true,
          data: res,
          message: '',
        };
      } else {
        console.log('Authenticate fail: ' + res.message)
        return {
          isOk: false,
          data: this.authService.credentialSubject.value,
          message: res.message,
        };
      }
    })
  }
}
