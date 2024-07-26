import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [apiProducts, setApiProducts] = useState([]);
  return (
    <>
      <CartContext.Provider
        value={{ cartList, setCartList, apiProducts, setApiProducts }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
