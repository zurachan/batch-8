import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentMasterComponent } from './department-master/department-master.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentEffects } from './state/department.effects';
import { departmentKey, DepartmentReducer } from './state/department.reducers';

@NgModule({
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    StoreModule.forFeature(departmentKey, DepartmentReducer),
    EffectsModule.forFeature([DepartmentEffects]),
    TranslateModule
  ],
  declarations: [DepartmentMasterComponent, DepartmentDetailComponent]
})
export class DepartmentModule { }
