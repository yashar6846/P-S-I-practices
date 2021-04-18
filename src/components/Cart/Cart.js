import { useState } from "react";
import CartItem from "./CartItem";
import ConfirmationPopUp from "./ConfirmationPopUp";

import {
  EmptyCart,
  Container,
  TotalPrice,
  CartItems,
  ClearCart,
  BottomRow
} from "./styled";

const Cart = ({ cart, removeFromCart, removeAll }) => {
  const [showPop, setShowPop] = useState(false);

  if (!cart.length) {
    return <EmptyCart>your cart is currently empty</EmptyCart>;
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
        <ClearCart disabled={showPop} onClick={() => setShowPop(true)}>
          Delete All
        </ClearCart>
        <ConfirmationPopUp
          show={showPop}
          onCancel={() => setShowPop(false)}
          onConfirm={() => removeAll()}
        />
      </BottomRow>
    </Container>
  );
};

export default Cart;
