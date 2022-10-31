import  Express  from "express";
import transactionController from "../Controllers/transactionController";


const TransactionRouter =Express.Router();

TransactionRouter.post("/",transactionController.createTransaction)
TransactionRouter.get("/",transactionController.getAllTransaction)
TransactionRouter.get("/:id",transactionController.getOneTransaction)
TransactionRouter.patch("/:id",transactionController.updateTransaction)
TransactionRouter.delete("/:id",transactionController.deleteTransaction)


export default TransactionRouter;
