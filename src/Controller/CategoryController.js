import Category from "../Model/CategoryModel";


class CategoryController{

static async createCategory(req,res){
    try{
        const newCategory= new Category({
            name:req.body.name
        });
        newCategory.save();
        res.send(newCategory)
    }catch(error){
        res.status(400).send({message:"internal serever error ", error:error.message})
    }
}


}



export default CategoryController;