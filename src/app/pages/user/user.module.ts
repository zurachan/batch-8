import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserDeleteConfirmComponent } from './user-delete-confirm/user-delete-confirm.component';
import { CustomEducationTypeComponent } from './custom-education-type/custom-education-type.component';

@NgModule({
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule],
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserDeleteConfirmComponent,
    CustomEducationTypeComponent,
  ],
})
export class UserModule {}
