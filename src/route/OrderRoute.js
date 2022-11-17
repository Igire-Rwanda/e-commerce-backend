

import { Router } from "express";
import * as OrderController from "../controllers/OrderController";

const route = Router();


route
  .route("/")
  .post( OrderController.createController)
  .get(OrderController.getAllController);


route
  .route("/:id")
  .patch(OrderController.updateController)
  .get(OrderController.getOneController)
  .delete(OrderController.deleteController);

export default route;
