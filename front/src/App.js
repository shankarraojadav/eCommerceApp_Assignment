import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './components/add_product/AddProduct';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';




const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path='/' element={ <Home /> }  />
            <Route path='/addProduct' element={ <AddProduct /> }  />
         </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App;