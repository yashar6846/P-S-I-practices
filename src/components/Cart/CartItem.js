import React, { useState } from "react";
import ConfirmationPopUp from "./ConfirmationPopUp";
import {
  ProductContainer,
  Description,
  Image,
  TextBody,
  Title,
  Price,
  button
} from "./styled";

const CartItem = ({ product, removeFromCart }) => {
  const [showPop, setShowPop] = useState(false);

  return (
    <>
      <ProductContainer>
        <div>
          <Image src={product.image} alt={product.name} />
        </div>
        <TextBody>
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>
        </TextBody>
        <div>
          <Price>
            ${product.price} * {product.count}{" "}
          </Price>
          <button disabled={showPop} onClick={() => setShowPop(true)}>
            remove
          </button>
        </div>
      </ProductContainer>

      <ConfirmationPopUp
        show={showPop}
        onConfirm={() => removeFromCart(product)}
        onCancel={() => setShowPop(false)}
      />
    </>
  );
};

export default CartItem;
