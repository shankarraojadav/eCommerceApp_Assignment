import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { deleteProduct, getProduct } from '../../service/api';

import './home.css';

 const Home = () => {

    const [products, setProducts] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
         AllProducts()
    }, []);

    const AllProducts =async () => {
       let response = await getProduct();
       setProducts(response.data)
    }

    const DeleteProduct =async (id) => {
        await deleteProduct(id)
        AllProducts();
    }

    return (
      <div>
         <div>
            <input type='text' placeholder='search product' onChange={(e) => setSearchTerm(e.target.value)} />
            
         </div>
          <div className='show_products'>
          
          {
           products && 
           products.filter((data) => {
            if(searchTerm == "" ) {
               return data
         } else if (data.pName.toLowerCase().includes(searchTerm.toLowerCase())) 
              return data
           }).map((data,ind) => {
               return <div className="card" key={ind}>
                  <img  width="200px" height="150px" src={data.image} />
                  <div className='card_data' >
                  <p>Name: <span style={{fontSize:"20px", fontWeight:"900", color:"blue"}}>{data.pName}</span></p>
                   <p>Price: <span style={{fontSize:"20px", fontWeight:"900", color:"blue"}}>{data.pPrice}</span></p>
                  </div>
                   <div>
                    <Button variant="contained" style={{
                       alignSelf:"center"
                    }} onClick={() => DeleteProduct(data._id)}>Delete</Button>
                   </div>
               </div>
           })
          }
       </div>
      </div>
       
    )
 };


 export default Home;