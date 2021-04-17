import {
  MenuContainer,
  MenuItem,
  MenuLink,
  NavigationBar,
  Title,
} from "./styled";

const Menu = ({ cartCount }) => {
  return (
    <NavigationBar>
      <Title>Shopping</Title>
      <MenuContainer>
        <MenuItem>
          <MenuLink to="/">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/cart">
            Cart<span>{cartCount ? `(${cartCount})` : ""}</span>
          </MenuLink>
        </MenuItem>
      </MenuContainer>
    </NavigationBar>
  );
};

export default Menu;
