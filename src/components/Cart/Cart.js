import CartItem from "./CartItem";

import {
  EmptyCart,
   Container,
    TotalPrice,
     CartItems, 
      ClearCart,
       BottomRow } from "./styled";

const Cart = ({ cart, removeFromCart, removeAll }) => {
   if(!cart.length) {
     return <EmptyCart>your cart is currently empty</EmptyCart>
   }
  const cartItems = cart.map((item) => (
    <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />
  ));
  return (
    <Container>
     <CartItems>{cartItems}</CartItems>
     <BottomRow>
     <TotalPrice>
      Total Price: $
      {cart.reduce((total, item) => total + item.price * item.count, 0)}
      </TotalPrice>
      <ClearCart onClick={removeAll}>Delete All</ClearCart>
      
      
      </BottomRow>
      
    </Container>
  );
};

export default Cart;
