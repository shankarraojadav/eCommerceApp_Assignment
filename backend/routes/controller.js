import ProductAdd from "../model/productSchema.js";




export const addProduct =async (req, res) => {
    console.log(req.body);
   try {
    const product = req.body;
    const newProduct = new ProductAdd(product);
    await newProduct.save();
    res.status(200).json({msg: "product added successfully"})
   } catch (error) {
    res.status(404).json({msg: error.message})
   }
};


export const getProduct =async (req, res) => {
    
   try {
    const products =await ProductAdd.find({})
    res.status(200).json(products)
   } catch (error) {
    res.status(404).json({msg: error.message})
   }
};

export const deleteProduct = async (req, res) => {
   console.log(req.params.id)
   try {
         await ProductAdd.deleteOne({_id: req.params.id})
   } catch (error) {
      
   }
}