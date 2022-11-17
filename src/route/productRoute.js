import { Router } from "express";
import * as ProductController from "../controllers/productController";

const route = Router();


route
  .route("/")
  .post( ProductController.createController)
  .get(ProductController.getAllController);


route
  .route("/:id")
  .patch(ProductController.updateController)
  .get(ProductController.getOneController)
  .delete(ProductController.deleteController);

export default route;
