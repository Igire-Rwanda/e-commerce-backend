import transactionModel from "../Model/transactionModel"

import handleCRUD from  "../utils/handleCRUD";

const createTransaction = handleCRUD.createOne(transactionModel);
const getAllTransaction = handleCRUD.getAll(transactionModel);
const getOneTransaction = handleCRUD. getOneById(transactionModel);
const updateTransaction = handleCRUD.updateOneById(transactionModel);
const deleteTransaction = handleCRUD.deleteOneById(transactionModel);

export default {createTransaction,getAllTransaction,getOneTransaction,updateTransaction,deleteTransaction}