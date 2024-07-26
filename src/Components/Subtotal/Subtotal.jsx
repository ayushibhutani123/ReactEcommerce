import React from "react";
import "./Subtotal.css";

export default function Subtotal({ total }) {
  return (
    <>
      <div className="subtotal">
        <p>Subtotal</p>
        <strong>${total.toFixed(2)}</strong>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
        <button>Proceed to Checkout</button>
      </div>
    </>
  );
}
