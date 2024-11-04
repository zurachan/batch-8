import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Department } from '../../../models/department';
import * as departmentSelector from '../state/department.selectors';
import { DepartmentAction } from '../state/department.actions';

@Component({
  selector: 'app-department-master',
  templateUrl: './department-master.component.html',
  styleUrls: ['./department-master.component.css'],
})
export class DepartmentMasterComponent implements OnInit {
  constructor(private store: Store) { }

  departments: Department[] = [];
  ngOnInit() {
    this.getAll();
    this.store.select(departmentSelector.selectListDepartment).pipe().subscribe((res: any) => {
      if (res) this.departments = res.map((x: any) => x);
      console.log(this.departments);
    });
  }
  getAll() {
    this.store.dispatch(DepartmentAction.getAllDepartment({ request: {} }));
  }
}
