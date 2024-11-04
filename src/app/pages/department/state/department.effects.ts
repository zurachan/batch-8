import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DepartmentService } from '../../../services/department.service';
import { Injectable } from '@angular/core';
import { DepartmentAction } from './department.actions';
@Injectable()
export class DepartmentEffects {
    constructor(private actions: Actions, private departmentService: DepartmentService) { }

    listDepartment$ = createEffect(() =>
        this.actions.pipe(
            ofType(DepartmentAction.getAllDepartment),
            mergeMap(({ request }) =>
                this.departmentService.getAll(request).pipe(
                    map((res: any) => DepartmentAction.getAllDepartmentSuccess({ success: res })),
                    catchError((error) => of(DepartmentAction.getAllDepartmentFail({ error })))
                )
            )
        )
    );

    detailDepartment$ = createEffect(() =>
        this.actions.pipe(
            ofType(DepartmentAction.getByIdDepartment),
            mergeMap(({ request }) =>
                this.departmentService.getById(request).pipe(
                    map((res: any) => DepartmentAction.getByIdDepartmentSuccess({ success: res })),
                    catchError((error) => of(DepartmentAction.getByIdDepartmentFail({ error })))
                )
            )
        )
    );
}
