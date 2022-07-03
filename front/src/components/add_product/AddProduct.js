import { Button } from '@mui/material';
import { useState } from 'react';
import { productAdd } from '../../service/api';
import './addProduct.css';



 const AddProduct = () => {
    const [pName, setPname] = useState('');
    const [pPrice, setPprice] = useState('');
    const [image, setImage] = useState();
    
    const handlePname = (e) => {
        setPname(e.target.value)
    }

    

    const handlePprice = (e) => {
        setPprice(e.target.value)
    }
// console.log(image && URL.createObjectURL(image))

const handleImageChange = (e) => {
    const img = URL.createObjectURL(e.target.files[0])
       setImage(img);
}

   const handleAdd =async () => {
   
    let product = {
        pName,
        pPrice,
       image
    }
    console.log(product)
    const response = await productAdd(product);
    // console.log(response);
   }
    return (
        <div className="addproduct">
           
            { image && <img alt="no image" style={{alignSelf:"center"}} width="300px" src={image} />}
            <h1>Add Product</h1>
            <input type="text" placeholder="Product Name"   onChange={handlePname}/>
            <input type="text" placeholder="Product Price"  onChange={handlePprice} />
            <div style={{display:"flex",
            flexDirection:"row", alignSelf:"center",
        marginLeft:"100px"}}
            >
                <p>Add Image</p>
                <input type="file"  onChange={handleImageChange} />
            </div>
            <Button variant="contained" style={{width:"200px", alignSelf:"center"}} onClick={handleAdd}>Add</Button>
            
        </div>
    )
 };


 export default AddProduct;