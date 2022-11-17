

import { Router } from "express";
import * as ShippingController from "../controllers/shippingController";

const route = Router();


route
  .route("/")
  .post( ShippingController.createController)
  .get(ShippingController.getAllController);


route
  .route("/:id")
  .patch(ShippingController.updateController)
  .get(ShippingController.getOneController)
  .delete(ShippingController.deleteController);

export default route;
