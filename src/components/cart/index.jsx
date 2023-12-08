// Styles
import CartItem from "../cart-item";
import * as Styles from "./styles";
import { useSelector } from "react-redux"

const Cart = ({ isVisible, setIsVisible }) => {
  const { products } = useSelector(rootReducer => rootReducer.cartReducer)
  const handleEscapeAreaClick = () => setIsVisible(false);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        
        {products.map(product => (
          <CartItem product={product} />
        ))}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
