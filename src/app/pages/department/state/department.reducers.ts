import { createReducer, on } from '@ngrx/store';
import { DepartmentAction } from './department.actions';
export interface DepartmentState {
    listDepartment: any
    detailDepartment: any
}

export const initialState: DepartmentState = {
    listDepartment: null,
    detailDepartment: null
}

export const departmentKey = 'department'
export const DepartmentReducer = createReducer(
    initialState,
    on(DepartmentAction.getAllDepartment, (state, _) => ({ ...state })),
    on(DepartmentAction.getAllDepartmentSuccess, (state, { success }) => ({ ...state, listDepartment: success })),
    on(DepartmentAction.getAllDepartmentFail, (state, { error }) => ({ ...state, error })),

    on(DepartmentAction.getByIdDepartment, (state, _) => ({ ...state })),
    on(DepartmentAction.getByIdDepartmentSuccess, (state, { success }) => ({ ...state, detailDepartment: success })),
    on(DepartmentAction.getByIdDepartmentFail, (state, { error }) => ({ ...state, error })),
)