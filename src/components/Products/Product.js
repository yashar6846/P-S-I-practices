// import React from "react";
import {
  ProductContainer,
  Description,
  Image,
  TextBody,
  Title,
  Price,
  button,
} from "./styled";

const Product = ({product, addToCart}) => {
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
        <Price>${product.price}</Price>
        <button onClick={() => addToCart(product)}>Buy</button>
      </div>
    </ProductContainer>
  );
};

export default Product;
