
import './App.css';

import Home from './components/Home';
import {Routes, Route, useLocation} from 'react-router-dom';
import About from './components/about';
import Product from './components/product';
import Adminpage from './components/admin';
import Order from './components/Order';
//import Cart from './components/cart';
import AddItem from './components/addProduct';
import EditProduct from './components/editproduct';
import { CartProvider } from './context/cartfn'
import CartItem from './components/cart-item';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';
import ForgetPassword from './components/forget-password';
import Newpassword from './components/new-password';
import Checkout from './components/checkout';

function App() {
 
  return (
    <>
   <CartProvider>
  
    <Routes>
   
      <Route exact path='/' Component={Home}/>
      <Route exact path='/product/:id' Component={Product}/>
      <Route exact path='/about' Component={About}/>
      <Route exact path='/adminpage' Component={Adminpage}/>
      <Route exact path='/order' Component={Order}/>
     <Route exact path='/cart' Component={CartItem}/>
     <Route exact path='/checkout' Component={Checkout}/>
     <Route exact path='/addproducts' Component={AddItem}/>
     <Route exact path='/edit/:id' Component={EditProduct}/>
     <Route exact path='/dashboard' Component={Dashboard}/>
     <Route exact path='/login' Component={Login}/>
     <Route exact path='/register' Component={Register}/>
     <Route exact path='/reset-password' Component={ForgetPassword}/>
     <Route exact path='/new-password' Component={Newpassword}/>
     
     
     
      
    

      </Routes>
      </CartProvider>
    
    </>
  );
}

export default App;
