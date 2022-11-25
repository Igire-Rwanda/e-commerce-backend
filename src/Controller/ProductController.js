import Product from "../Model/ProductModel";

class productController{
  

    static async createProduct(req,res){
        try {
          const newProduct =new Product({
            price:req.body.price,
            quantity:req.body.quantity,
            title:req.body.title,
            description:req.body.description,
            category:req.body.category,
            picture:req.file.filename
          });
          newProduct.save();
          res.send(newProduct)
        } catch (error) {
         res.status(500).send({message:"internal server error",error: error.message}) 
        }
      }
    static async getAllProduct(req,res){
        const products = await Product.find();
        if(!products){
            return res.status(404).json({error:"product are not listing"});
        }
        return res.status(200).json({message: "product listing successfully", data: products});
    }
    static async getOneProduct(req,res){
      const producted = await Product.findById(req.params.id);
      if(!producted){
          return res.status(404).json({error:"Product are not able to get One"});
      }
      return res.status(200).json({message: "Get One product Successfully", data: producted});
  }
  static async UpdateProduct(req,res){
    const productus = await Product.findByIdAndUpdate(req.params.id, req.body,{
      new:true,
    });
    if(!productus){
        return res.status(404).json({error:"Update product Error"});
    }
    return res.status(200).json({message: "Product can be updated", data: productus});
}
static async DeleteProduct(req,res){
  const deleteproducts = await Product.findByIdAndDelete(req.params.id);
  if(!deleteproducts){
    return res.status(404).json({error: "delete product Error"});
  }
  return res.status(200).json({message: "Product deleted successfull", data: deleteproducts});
}
}
export default productController;