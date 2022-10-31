import shippingModel from "../Model/shippingModel"

import handleCRUD from  "../utils/handleCRUD";

const createShipping = handleCRUD.createOne(shippingModel);
const getAllShipping = handleCRUD.getAll(shippingModel);
const getOneShipping = handleCRUD. getOneById(shippingModel);
const updateShipping = handleCRUD.updateOneById(shippingModel);
const deleteShipping = handleCRUD.deleteOneById(shippingModel);

export default {createShipping,getAllShipping,getOneShipping,updateShipping,deleteShipping}