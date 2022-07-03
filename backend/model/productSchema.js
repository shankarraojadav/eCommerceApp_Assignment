import mongoose from 'mongoose';

const productSch = mongoose.Schema({
    pName: String,
    pPrice: String,
    image: String
});


const ProductAdd = mongoose.model("ProductAdd", productSch);

export default ProductAdd;