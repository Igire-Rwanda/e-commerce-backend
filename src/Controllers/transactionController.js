import  {create,getAll,getOneById,updateOneById,deleteOneById} from "./globalController";
import transactionModel from "../Model/shippingModel"


export const createController = create(transactionModel)
export const getAllController = getAll(transactionModel)

export const getOneController = getOneById(transactionModel)


export const updateController = updateOneById(transactionModel)

export const deleteController =deleteOneById(transactionModel)