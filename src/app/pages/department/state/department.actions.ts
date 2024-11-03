import { createActionGroup, props } from "@ngrx/store";

export const DepartmentAction = createActionGroup({
    source: 'Department',
    events: {
        getAllDepartment: props<{ request: any }>(),
        getAllDepartmentSuccess: props<{ success: any }>(),
        getAllDepartmentFail: props<{ error: any }>(),

        getByIdDepartment: props<{ request: any }>(),
        getByIdDepartmentSuccess: props<{ success: any }>(),
        getByIdDepartmentFail: props<{ error: any }>(),
    }
})


// export const listDepartment = createAction("GetAll Department", props<{ request: any }>())
// export const listDepartmentSuccess = createAction("GetAll Department Success", props<{ success: any }>())
// export const listDepartmentFail = createAction("GetAll Department Fail", props<{ error: any }>())
// export const detailDepartment = createAction("GetById Department", props<{ request: any }>())
// export const detailDepartmentSuccess = createAction("GetById Department Success", props<{ success: any }>())
// export const detailDepartmentFail = createAction("GetById Department Fail", props<{ error: any }>())