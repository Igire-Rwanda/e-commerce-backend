import productModel from "../Model/productModel"

import handleCRUD from  "../utils/handleCRUD";

const createProduct = handleCRUD.createOne(productModel);
const getAllProduct = handleCRUD.getAll(productModel);
const getOneProduct = handleCRUD. getOneById(productModel);
const updateProduct = handleCRUD.updateOneById(productModel);
const deleteProduct = handleCRUD.deleteOneById(productModel);

export default {createProduct,getAllProduct,getOneProduct,updateProduct,deleteProduct}