import { useEffect, useState, useRef } from "react";
import Product from "../Product/Product";
import "./RecommendedCarousel.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const RecommendedCarousel = ({ products }) => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (products.length > 0)
      setRecommendedProducts(
        products.filter((product) => product.recommended === true)
      );
  }, [products]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="recommended__container">
        <div className="recommended-title">Recommended Products</div>
        <div className="carousel-container">
          <div className="recommender-container">
            <span className="button-span">
              <button className="scroll-button-content" onClick={scrollLeft}>
                <KeyboardDoubleArrowLeftIcon />
              </button>
            </span>
          </div>
          <div className="carousel" ref={carouselRef}>
            {products.length>0 && recommendedProducts.map((product,index) => (
              <Product
              key={index}
               product={product}
              />
            ))}
          </div>
          <div className="scroll-button right">
            <span className="button-span">
              <button className="scroll-button-content" onClick={scrollRight}>
                <KeyboardDoubleArrowRightIcon />
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedCarousel;
