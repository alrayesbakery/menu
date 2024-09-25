import React, { useState } from "react";
import "./index.css";
import { MenuItem } from "../../types";

interface Props {
  item: MenuItem;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ item, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<"small" | "large" | null>(
    item.prices ? "small" : null
  );

  const displayPrice = () => {
    if ("price" in item) {
      // For items with a single price
      return item.price;
    } else if ("prices" in item && item.prices) {
      // For items with multiple sizes (e.g., pizzas)
      return selectedSize
        ? item.prices[selectedSize]
        : `${item.prices.small} - ${item.prices.large}`;
    }
    return "Price not available";
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-image-container">
          {item.image ? <img src={item.image} alt={item.name} /> : null}
        </div>
        <div className="modal-details">
          <h2>{item.name}</h2>
          <p className="price">{displayPrice()}</p>

          {/* Size selector for items with multiple sizes */}
          {"prices" in item && item.prices && (
            <div className="size-selector">
              <button
                className={selectedSize === "small" ? "selected" : ""}
                onClick={() => setSelectedSize("small")}
              >
                Small
              </button>
              <button
                className={selectedSize === "large" ? "selected" : ""}
                onClick={() => setSelectedSize("large")}
              >
                Large
              </button>
            </div>
          )}
          {item.ingredients ? (
            <p className="ingredients">
              <strong>Ingredients:</strong> {item.ingredients}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
