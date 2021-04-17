import styled from "styled-components";

export const EmptyCart = styled.div`
text-align: center;
font-size: 1.75rem;
margin: 15px;
width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
 
`;
export const TotalPrice = styled.div`

`;
export const CartItems = styled.div`
display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const  ClearCart = styled.button`
width: 100px;
height: 40px;
border-radius: 5px;
background-color: #ee8899;
&:hover {
  background-color: #eebbbb;
}
`;
export const BottomRow = styled.div`
display: flex;
margin: 15px;
align-items: center;
justify-content: space-between;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 350px;
  margin: 15px;
`;

export const Image = styled.img`
  width: 50px;
`;

export const TextBody = styled.div`
  margin: 0 15px;
`;

export const Title = styled.h3`
  font-size: 24px;
`;
export const Text = styled.h1`
  font-size: 50px;
  text-align: center;
`;

export const Description = styled.h5`
  font-size: 12px;
`;

export const Price = styled.div`
  font-size: 20px;
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: #2245dd;
  color: white;
  padding: 5px 10px;
  &:hover {
    background-color: #557799;
  }
`;
