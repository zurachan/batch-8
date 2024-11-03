import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentMasterComponent } from './department-master/department-master.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentMasterComponent,
  },
  {
    path: 'create',
    component: DepartmentDetailComponent,
  },
  {
    path: 'edit/:id',
    component: DepartmentDetailComponent,
  },
  {
    path: 'view/:id',
    component: DepartmentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule { }
