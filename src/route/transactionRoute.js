import { Router } from "express";
import * as TransactionController from "../controllers/transactionController";

const route = Router();


route
  .route("/")
  .post( TransactionController .createController)
  .get(TransactionController .getAllController);


route
  .route("/:id")
  .patch(TransactionController .updateController)
  .get(TransactionController .getOneController)
  .delete(TransactionController .deleteController);

export default route;
