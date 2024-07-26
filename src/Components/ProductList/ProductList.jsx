import { useState, useEffect } from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import FilterRate from "../FilterRate/FilterRate";

export default function ProductList({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleApplyFilters = (checkedVal) => {
    if (checkedVal.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => {
        const productRatingStr = product.rating.toString();
        return checkedVal.includes(productRatingStr);
      });
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="home__detail">
      <div className="home__title">
        <h1>Products</h1>
      </div>
      <div className="filter__container">
        <FilterRate onApplyFilters={handleApplyFilters} />
        <div className="home__row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product,index) => <Product key={index} product={product} />)
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}
