import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import BtnComponent from "../BtnComponent/BtnComponent.jsx";

export default function Product(props) {
  const { rating, id, title, price, thumbnail } = props.product;
  const fullStars = Math.floor(rating);

  return (
    <div className="product">
      <div className="product__info">
        <Link to={`/${id}`} className="content__wrapper">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(fullStars)
              .fill()
              .map((_, i) => (
                <p key={i}>
                  <StarIcon className="product__star" />
                </p>
              ))}
          </div>
        </Link>
        <Link to={`/${id}`} className="image__container">
          <img src={thumbnail} alt="product-image" />
        </Link>
        <BtnComponent id={id}/>
      </div>
    </div>
  );
}
