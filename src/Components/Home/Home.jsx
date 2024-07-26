import { useContext } from "react";
import "./Home.css";
import RecommendedCarousel from "../RecommendedCarousel/RecommendedCarousel";
import ProductList from "../ProductList/ProductList";
import CartContext from "../context/CartContext";

function Home() {
  const { apiProducts } = useContext(CartContext);
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?size=626&ext=jpg&ga=GA1.1.1489871099.1721190451&semt=ais_user"
          alt=""
          className="home__image object-contain"
        />
        <RecommendedCarousel products={apiProducts} />
        <ProductList products={apiProducts} />
      </div>
    </div>
  );
}

export default Home;
