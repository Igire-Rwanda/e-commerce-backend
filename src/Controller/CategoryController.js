import Category from "../Model/CategoryModel";


class CategoryController{

    static async getAllCategories(req,res){
        const AllCategories = await  Category.find();
        res.send({data:AllCategories});
    }


    static async getOneCategory(req,res){
        const AllCategory= await  Category.findById(req.params.id);
        if(!AllCategory){
            return res.status(404).json({error:"category not fund"});
        }
        return res.status(200).json({message:"category get successfull",data:AllCategory});
    }
    
    static async updateAll(req,res){
        const AllCategoryie= await  Category.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        if(!AllCategoryie){
            return res.status(404).json({error:"update not found"});
        }
        return res.status(200).json({message:"Updated Successfully",data:AllCategoryie});
    }

    static async deleteCategory(req,res){
        const AllCategorydel= await  Category.findByIdAndDelete(req.params.id);
        if(!AllCategorydel){
            return res.status(404).json({error:"delete not found"});
        }
        return res.status(200).json({message:"deleted Successfully",data:AllCategorydel});
    }
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