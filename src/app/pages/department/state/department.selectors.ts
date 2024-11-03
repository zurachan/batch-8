import { createFeatureSelector, createSelector } from "@ngrx/store";
import { departmentKey, DepartmentState } from "./department.reducers";

export const selectDepartmentState = createFeatureSelector<DepartmentState>(departmentKey)
export const selectListDepartment = createSelector(selectDepartmentState, state => state.listDepartment)
export const selectDetailDepartment = createSelector(selectDepartmentState, state => state.detailDepartment)

