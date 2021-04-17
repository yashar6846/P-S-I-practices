import { mockData } from "../Data/mokData";
import Product from "./Product";
import { Container } from "./styled";



const Products = ({addToCart}) => {
  const Data = mockData
  const productsComponent = Data.map((product) => (
    <Product key={product.id} addToCart={addToCart} product={product} />
  ));
  return <Container>{productsComponent}</Container>;
  
};

export default Products;
