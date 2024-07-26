import CartContext from "../context/CartContext";
import { useContext, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./BtnComponent.css"

const BtnComponent = ({ id }) => {
  const { cartList, setCartList } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState([]);
  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    setCartList((prevCartList) => [...prevCartList, { id: id, count: 1 }]);
  }; 

  const increaseCount = (id) => {
    const addItemCount = cart.map((cartItem) =>
      cartItem.id === id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
    );
    setCartList(addItemCount);
  };

  const decreaseCount = (id) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id == id && cartItem.count > 0
        ? 
        { ...cartItem, count: cartItem.count - 1 }
        : cartItem
    );
  
    setCartList(updatedCart.filter((item) => item.count > 0));
  };
  

  useEffect(() => {
      const selectedIds = cartList.map((item) => item.id);
      setSelectedItem(selectedIds);
      setCart(cartList);    
  }, [cartList]);

  let currentItemCount = cartList.find((item) => item.id == id)?.count;
  let isSelected = selectedItem.includes(id);
 
  return (
    <>
    {!isSelected
    ?
    <button className="addToBasketBtn" onClick={() => addCart(id)}>Add to Basket</button>
    :
    <div className="editAbleBasketBtn">
    <button onClick={() => decreaseCount(id)}><RemoveIcon /></button>
    <span> {currentItemCount}</span>
    <button onClick={() => increaseCount(id)}><AddIcon /></button>
    </div>
    }
    </>)
}
    


export default BtnComponent;
