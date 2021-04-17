 import React from "react";
import {
  ProductContainer,
  Description,
  Image,
  TextBody,
  Title,
  Price,
  button,
  
} from "./styled";

const CartItem = ({product, removeFromCart }) => {
  return (
    <ProductContainer>
      <div>
        <Image src={product.image} alt={product.name} />
      </div>
      <TextBody>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
      </TextBody>
      <div>
        <Price>${product.price} * {product.count} </Price>
        <button onClick={() => removeFromCart(product)}>remove</button>
      </div>
    </ProductContainer>
  );
};

export default CartItem;
