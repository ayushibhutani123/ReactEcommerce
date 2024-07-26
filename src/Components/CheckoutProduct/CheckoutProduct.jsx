import BtnComponent from "../BtnComponent/BtnComponent";
import "./CheckoutProduct.css";


export default function CheckoutProduct({ CheckoutProducts }) {
  return (
    <>
      <div className="checkoutProduct">
        <span className="checkoutProduct__image">
          <img src={CheckoutProducts?.thumbnail} alt={CheckoutProducts?.title} />
        </span>
        <div className="checkoutproduct__info">
          <p className="checkoutProduct__title">{CheckoutProducts?.title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{CheckoutProducts?.price}</strong>
          </p>
          <BtnComponent id={CheckoutProducts.id} />
        </div>
      </div>
    </>
  );
}
