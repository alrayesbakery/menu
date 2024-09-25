import React from "react";
import "./index.css";
import { MenuItem as MenuItemType } from "../../types";

interface Props {
  item: MenuItemType;
  onClick: () => void;
}

const MenuItem: React.FC<Props> = ({ item, onClick }) => {
  const displayPrice = () => {
    if ("price" in item) {
      // For items with a single price
      return item.price;
    } else if ("prices" in item && item.prices) {
      // For items with multiple sizes (e.g., pizzas)
      return `${item.prices.small} - ${item.prices.large}`;
    }
    return "Price not available";
  };

  return (
    <div className="menu-item" onClick={onClick}>
      <div className="menu-item-image-container">
        {item.image ? <img src={item.image} alt={item.name} /> : null}
      </div>
      <h3>{item.name}</h3>
      <p className="price">{displayPrice()}</p>
    </div>
  );
};

export default MenuItem;
