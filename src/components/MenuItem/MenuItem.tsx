import React from "react";
import "./index.css";
import { MenuItem as MenuItemType } from "../../types";

interface Props {
  item: MenuItemType;
  onClick: () => void;
}

const MenuItem: React.FC<Props> = ({ item, onClick }) => {
  return (
    <div className="menu-item" onClick={onClick}>
      <div className="menu-item-image-container">
        <img src={item.image} alt={item.name} />
      </div>
      <h3>{item.name}</h3>
      <p className="price">{item.price}</p>
    </div>
  );
};

export default MenuItem;
