import Category from "../Model/categoryModel";
import handleCRUD from  "../utils/handleCRUD";

const createCategory = handleCRUD.createOne(Category);
const getAllCategory = handleCRUD.getAll(Category);
const getOneCategory = handleCRUD. getOneById(Category);
const updateCategory = handleCRUD.updateOneById(Category);
const deleteCategory = handleCRUD.deleteOneById(Category);

export default {createCategory,getAllCategory,getOneCategory,updateCategory,deleteCategory}