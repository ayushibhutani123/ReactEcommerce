import { useContext, useEffect, useState } from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import CartContext from "../context/CartContext";

export default function Checkout() {
  const { cartList, apiProducts } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let newTotal = 0;
      cartList.forEach(cartItem => {
        const product = apiProducts.find(product => product.id === cartItem.id);
        if (product) {
          newTotal += cartItem.count * product.price;
        }
      });
      setTotal(newTotal);
    };

    calculateTotal();
  }, [cartList, apiProducts]);

  let checkoutProduct;

  if (apiProducts) {
    checkoutProduct = apiProducts.filter((product) =>
      cartList.some((cartItem) => cartItem.id === product.id)
    );
  }

  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="checkout__ad"
          />
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {checkoutProduct &&
              checkoutProduct.map((product) => (
                <CheckoutProduct key={product.id} CheckoutProducts={product} />
              ))}
          </div>
        </div>
        
        <div className="checkout__right">
          <Subtotal total={total} />
        </div>
      </div>
    </>
  );
}
