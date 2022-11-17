import { Router } from "express";
import * as CategoryController from "../controllers/categoryController";

const route = Router();


route
  .route("/")
  .post( CategoryController .createController)
  .get(CategoryController .getAllController);


route
  .route("/:id")
  .patch(CategoryController .updateController)
  .get(CategoryController .getOneController)
  .delete(CategoryController .deleteController);

export default route;