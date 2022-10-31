import OrderModel from "../Model/orderModel"
import handleCRUD from  "../utils/handleCRUD";

const createOrder = handleCRUD.createOne(OrderModel);
const getAllOrder = handleCRUD.getAll(OrderModel);
const getOneOrder = handleCRUD. getOneById(OrderModel);
const updateOrder = handleCRUD.updateOneById(OrderModel);
const deleteOrder = handleCRUD.deleteOneById(OrderModel);

export default {createOrder,getAllOrder,getOneOrder,updateOrder,deleteOrder}