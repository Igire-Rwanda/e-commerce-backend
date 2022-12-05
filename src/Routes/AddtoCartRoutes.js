import express from "express";
import AddtoCartController from "../Controller/AddtoCartController";


const AddtoCartRoutes = express.Router();


AddtoCartRoutes.post("/", AddtoCartController.createAddtoCart);
AddtoCartRoutes.get("/", AddtoCartController.getAllAddtoCart);
AddtoCartRoutes.get("/:id", AddtoCartController.getOneAddtoCart);
AddtoCartRoutes.put("/:id", AddtoCartController.updateAll);
AddtoCartRoutes.delete("/:id", AddtoCartController.deleteAddtoCart)

export default AddtoCartRoutes;