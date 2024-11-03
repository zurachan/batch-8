import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/unauthen/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthenticateGuard } from './services/jwt/authenticate.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthenticateGuard],
    component: DashboardComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    canActivate: [AuthenticateGuard],
    loadChildren: () =>
      import('../app/pages/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'department',
    canActivate: [AuthenticateGuard],
    loadChildren: () =>
      import('../app/pages/department/department.module').then((m) => m.DepartmentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
