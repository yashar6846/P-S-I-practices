import React, {useState} from 'react'
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import Products from "./components/Products";

import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    let isNew = true;
    const newCart = cart.map((item) => {
      if (item.id === product.id){
        item.count++;
        isNew = false;
      }
      return item;
    });
    if(isNew){
      newCart.push({...product, count: 1 })
    }
    setCart(newCart);
  };
  const removeFromCart = (product) => {
    const newCart = cart.map((item) => {
      if (item.id ===product.id){
        item.count--;
      }
      return item;
    })
    setCart(newCart.filter((item) => item.count > 0 ))
  }
  const removeAll =() => {
    
    setCart([])
  }
  // console.log(cart);
  return (
    <Router>
    <div className="p-4 w-96 mx-auto">
    <Menu 
      cartCount={cart.reduce((total, item) =>{
        return total + item.count;
       }, 0)}
         />
      <Switch>
        <Route path="/" exact>
      <Products addToCart={addToCart} />
      </Route>
      <Route path="/cart">
      <Cart cart={cart} removeFromCart={removeFromCart}
      removeAll={removeAll} />
      
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
