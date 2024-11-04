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