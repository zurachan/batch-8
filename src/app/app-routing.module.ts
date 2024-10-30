import { UserModule } from './pages/user/user.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartmentComponent } from './pages/department/department.component';
import { UserComponent } from './pages/user/user.component';
import { UserCreateComponent } from './pages/user/user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  // {
  //   path: 'user',
  //   component: UserComponent,
  // },
  // {
  //   path: 'user/create',
  //   component: UserCreateComponent,
  // },
  {
    path: 'department',
    component: DepartmentComponent,
  },

  {
    path: 'user',
    loadChildren: () =>
      import('../app/pages/user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
