import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Auth from './Context/AuthContext';
import AuthContext from './Context/AuthContext';
import AddService from './Pages/AddService/AddService';
import Cart, { addCartContext } from './Pages/Cart/Cart';
import About from './Pages/Home/About/About';
import Header from './Pages/Home/Header/Header';
import Items from './Pages/Home/Items/Items';
import Products, { cartContext, productsContext } from './Pages/Home/Products/Products';
import Login, { authContext, userContext } from './Pages/Login/Login';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import Nav from './Pages/Navbar/Nav';
import Order from './Pages/Order/Order';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';


function App() {

  
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState();
  const [signUser,setSingUser] = useState();
  const [cartTotal,setCartTotal] = useState();

  return (


    <Auth>

    <addCartContext.Provider value={[cartTotal,setCartTotal]}>
   <userContext.Provider value={[signUser,setSingUser]}>

    
    <productsContext.Provider value={[products, setProducts]}>
      <cartContext.Provider value={[cartItems, setCartItems]}>


        <BrowserRouter>
          <Switch>
            <Route exact path="/">

              <Header />
              <Items />
              <Products />
              <About />
            </Route>

            <PrivateRoute path="/products/:id">
              <Order />
            </PrivateRoute>

            <Route path="/home">

              <Header />
              <Items />
              <Products />
              <About />
            </Route>

            <Route path="/login">
              <Nav />
              <Login />
            </Route>

            <Route path="/manageOrder">
              <ManageOrder />
            </Route>

            

            <Route path="/addservice">
              <Nav />
              <AddService />
            </Route>

            <Route path="/carts/:email">
              <Nav />
              <Cart />
            </Route>

          </Switch>
        </BrowserRouter>
      </cartContext.Provider>
    </productsContext.Provider>
    
    </userContext.Provider>
    </addCartContext.Provider>
    </Auth>
  

  );
}

export default App;
