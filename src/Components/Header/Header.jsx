import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import "./Header.css";
import { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

export default function Header() {
  const { cartList,setApiProducts } = useContext(CartContext);
  useEffect(() => {
    axios
      .get("/utils/data.json") 
      .then((response) => {
        const allProducts = response.data;
        setApiProducts(allProducts);
        console.log("Fetched products:", allProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [setApiProducts]);
  return (
    <>
      <div className="header flex justify-between">
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header__logo">
            <StoreIcon className="header__logoImage" fontSize="large" />
            <h2 className="header__logoTitle">eShop</h2>
          </div>
        </Link>
       </div>
       <div className="flex">
       <Link to="/search"><span className="text-white">Search</span>
        <SearchIcon className="header__searchIcon" />
        </Link>
        <div className="header__nav">
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign in</span>
          </div>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <div className="nav__item cart">
              <ShoppingBasketIcon fontSize="large" className="itemBasket" />
              {cartList.length>0 
              &&
              cartList.length
              }
            </div>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}
