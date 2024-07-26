import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import "./DetailPage.css";
import CartContext from "../Components/context/CartContext";
const DetailPage = () => {
  let { id } = useParams();
  const { apiProducts } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (apiProducts.length > 0) {
      const product = apiProducts.find((item) => item.id == id);
      setSelectedProduct(product);
    }
  }, [apiProducts, id]);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-header">
        <h1 className="product-title">{selectedProduct.title}</h1>
        <img
          src={selectedProduct.thumbnail}
          alt={selectedProduct.title}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <div className="product-description">{selectedProduct.description}</div>
        <div className="product-price">${selectedProduct.price}</div>
        <div className="product-rating">
          {selectedProduct.rating} <StarIcon style={{ color: "#ff9800" }} />
        </div>
        <div className="product-category">
          Category: {selectedProduct.category}
        </div>
        <div className="product-stock">In Stock ({selectedProduct.stock})</div>
        {selectedProduct.brand && (
          <div className="product-brand">Brand: {selectedProduct.brand}</div>
        )}
        <div className="product-warranty">
          {selectedProduct.warrantyInformation}
        </div>
        <div className="product-shipping">
          {selectedProduct.shippingInformation}
        </div>
      </div>
      <div className="product-meta">
        <div>
          <h2>Additional Information</h2>
          <p>Return Policy: {selectedProduct.returnPolicy}</p>
          <p>Minimum Order Quantity: {selectedProduct.minimumOrderQuantity}</p>
          <p>
            Created At:{" "}
            {new Date(selectedProduct.meta.createdAt).toLocaleDateString()}
          </p>
          <p>
            Updated At:{" "}
            {new Date(selectedProduct.meta.updatedAt).toLocaleDateString()}
          </p>
          <p>Barcode: {selectedProduct.meta.barcode}</p>
        </div>
        <div className="qrCode">
          <span>QR Code:</span>{" "}
          <img src={selectedProduct.meta.qrCode} alt="QR Code" />
        </div>
      </div>
      <div className="product-reviews">
        <h2>Reviews</h2>
        {selectedProduct.reviews.map((review, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography>
                {review.reviewerName} -{" "}
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} style={{ color: "#ff9800" }} />
                ))}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{review.comment}</Typography>
              <Typography>
                Date: {new Date(review.date).toLocaleDateString()}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
