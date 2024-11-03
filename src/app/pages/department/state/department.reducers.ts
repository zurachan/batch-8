import { createReducer, on } from '@ngrx/store';
import * as DepartmentAction from './department.actions';
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
    on(DepartmentAction.DepartmentAction.getAllDepartment, (state, _) => ({ ...state })),
    on(DepartmentAction.DepartmentAction.getAllDepartmentSuccess, (state, { success }) => ({ ...state, listDepartment: success })),
    on(DepartmentAction.DepartmentAction.getAllDepartmentFail, (state, { error }) => ({ ...state, error })),

    on(DepartmentAction.DepartmentAction.getByIdDepartment, (state, _) => ({ ...state })),
    on(DepartmentAction.DepartmentAction.getByIdDepartmentSuccess, (state, { success }) => ({ ...state, detailDepartment: success })),
    on(DepartmentAction.DepartmentAction.getByIdDepartmentFail, (state, { error }) => ({ ...state, error })),

    // on(DepartmentAction.listDepartment, (state, _) => ({ ...state })),
    // on(DepartmentAction.listDepartmentSuccess, (state, { success }) => ({ ...state, listDepartment: success })),
    // on(DepartmentAction.listDepartmentFail, (state, { error }) => ({ ...state, error })),

    // on(DepartmentAction.detailDepartment, (state, _) => ({ ...state })),
    // on(DepartmentAction.detailDepartmentSuccess, (state, { success }) => ({ ...state, detailDepartment: success })),
    // on(DepartmentAction.detailDepartmentFail, (state, { error }) => ({ ...state, error })),
)