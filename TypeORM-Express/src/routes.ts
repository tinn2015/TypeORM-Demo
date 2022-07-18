import { StudentController } from "./controller/StudentController"

export const Routes = [{
    method: "get",
    route: "/students",
    controller: StudentController,
    action: "all"
}, {
    method: "get",
    route: "/students/:id",
    controller: StudentController,
    action: "one"
}, {
    method: "post",
    route: "/students",
    controller: StudentController,
    action: "save"
}, {
    method: "post",
    route: "/students/cascade",
    controller: StudentController,
    action: "saveWidthCascade"
}, {
    method: "delete",
    route: "/students/:id",
    controller: StudentController,
    action: "remove"
}]