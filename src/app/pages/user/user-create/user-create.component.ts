import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private router: Router
  ) {}

  form!: FormGroup;

  ngOnInit() {
    this.InitForm();
  }

  InitForm() {
    this.form = this.formBuilder.group({
      id: [0],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      age: [null, [Validators.required]],
    });
  }

  onSave() {
    let value = this.form.getRawValue();
    this.UserService.create(value).subscribe((res) => {
      if (res) {
        alert('lưu thành công');
        this.router.navigateByUrl('/user');
      } else {
        alert('lưu thất bại');
      }
    });
  }
}
