import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from '@mui/material';
import './navbar.css';



const Navbar = () => {
    return (
   
         <AppBar position="static" className="navbar">
           <Toolbar>
           <NavLink to='/' style={{margin:"20px", textDecoration:"none", color:"white"}} >Home</NavLink>
           <NavLink to="/addProduct" style={{textDecoration:"none", color:"white"}}>Add Product</NavLink>
            </Toolbar> 
         </AppBar>
      
    )
  }
  
  
  export default Navbar;

