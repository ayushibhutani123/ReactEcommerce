import "./HitComponent.css"
import { Link } from "react-router-dom";
const HitComponent = ({ hit }) => { 
  return (
    <>
    <Link to={`/${hit.id}`} className="hit-item">
    <div className="hit-title">{hit.title}</div>
    <div className="hit-itemInfo">
    <div className="hit-itemDesc">
      <div className="hit-description">{hit.description}</div>
      <div className="hit-price">${hit.price}</div>
      </div>
      <div className="image-container">
      <img src={hit.thumbnail} alt={hit.title} className="hit-image" />
      </div>
      </div>
    </Link>
    </>
  );
};

export default HitComponent;
