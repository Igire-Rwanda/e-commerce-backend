import Product from "../Model/ProductModel";

class productController{
    static async AddProduct(req,res){
        const product = await Product.create({
            price:req.body.price,
            quantity:req.body.quantity,
            title:req.body.title,
            description:req.body.description,
            category:req.body.category
        })
        if (!product) {
            return res.status(404).json({error: "Product are not added"});
        }
        return res.status(200).json({ message: "product added successfully", data: product});
    }
}
export default productController;