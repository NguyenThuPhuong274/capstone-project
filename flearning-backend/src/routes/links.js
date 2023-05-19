import { CONSTANT_ROUTE } from "../constants";
import UserController from "../controller/UserController";
import CourseController from "../controller/CourseController";
export const Links = [
  {
    route: CONSTANT_ROUTE.SIGN_IN,
    method: "post",
    handleAction: UserController.getUser,
  },
  {
    route: CONSTANT_ROUTE.SIGN_UP,
    method: "post",
    handleAction: UserController.insertUser,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_USER + "/get",
    method: "get",
    handleAction: UserController.getUser,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_USER + "/get/byusername",
    method: "post",
    handleAction: UserController.getUserByUsername,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_USER + "/insert",
    method: "post",
    handleAction: UserController.getUser,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_USER + "/update",
    method: "post",
    handleAction: UserController.updateUserInfo,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_COURSE + "/get",
    method: "get",
    handleAction: CourseController.getCourses,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_COURSE + "/insert",
    method: "post",
    handleAction: CourseController.insertCourse,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_COURSE + "/update",
    method: "post",
    handleAction: CourseController.updateCourse,
  },
];
