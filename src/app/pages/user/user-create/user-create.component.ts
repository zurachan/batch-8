import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  form!: FormGroup;
  pageTitle: string = '';
  page = [
    { value: 'create', title: 'User Create' },
    { value: 'edit', title: 'User Update' },
    { value: 'view', title: 'User Detail' },
  ];

  educationTypeOption = [
    { value: 'hs', title: 'Học sinh' },
    { value: 'sv', title: 'Sinh viên' },
    { value: 'ncs', title: 'Nghiên cứu sinh' },
    { value: 'tts', title: 'Thực tập sinh' },
  ];

  currentPage: any;
  currentId: any;
  disabledForm: boolean = false;

  ngOnInit() {
    this.activatedRoute.url.subscribe((res) => {
      this.currentPage = this.page.find((x) => x.value == res[0].path);
      this.pageTitle = this.currentPage ? this.currentPage.title : '';
      this.disabledForm = this.currentPage.value == 'view';
      if (
        this.currentPage.value == 'edit' ||
        this.currentPage.value == 'view'
      ) {
        this.currentId = res[1].path;
        this.getDetailValue(this.currentId);
      }

      this.InitForm();
    });
  }

  getDetailValue(id: any) {
    this.UserService.getById(id).subscribe((res) => {
      if (res) this.bindValueForm(res);
    });
  }

  InitForm() {
    this.form = this.formBuilder.group({
      id: [0],
      firstName: [
        { value: null, disabled: this.disabledForm },
        [Validators.required],
      ],
      lastName: [
        { value: null, disabled: this.disabledForm },
        [Validators.required],
      ],
      age: [
        { value: null, disabled: this.disabledForm },
        [Validators.required],
      ],

      EducationType: [],
    });
  }

  onSave() {
    let value = this.form.getRawValue();
    console.log(value);
    return;
    switch (this.currentPage.value) {
      case 'edit':
        this.UserService.update(this.currentId, value).subscribe((res) => {
          if (res) {
            alert('lưu thành công');
            this.router.navigateByUrl('/user');
          } else {
            alert('lưu thất bại');
          }
        });
        break;

      case 'create':
        this.UserService.create(value).subscribe((res) => {
          if (res) {
            alert('lưu thành công');
            this.router.navigateByUrl('/user');
          } else {
            alert('lưu thất bại');
          }
        });
        break;
    }
  }

  bindValueForm(data: any) {
    this.form.patchValue(data);
  }

  onCheckedValueChange(value: any) {
    this.form.controls['EducationType'].setValue(value);
    console.log(this.form.getRawValue());
  }
}
