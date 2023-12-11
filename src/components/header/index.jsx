import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import { login, logout } from "../../redux/user/slice";
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);
  // const { products } = useSelector(rootReducer => rootReducer.cartReducer);
  const dispatch = useDispatch();

  const productsCount = useSelector(selectProductsCount)
  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(login({
      name: "Leonardo",
      email: "leonardolivelopes2@gmail.com"
    }))
  }

  const handleLogoutClick = () => {
    dispatch(logout())
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
