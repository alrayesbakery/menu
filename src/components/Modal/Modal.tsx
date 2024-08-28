import React from "react";
import "./index.css";
import { MenuItem } from "../../types";

interface Props {
  item: MenuItem;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ item, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-image-container">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="modal-details">
          <h2>{item.name}</h2>
          <p className="price">{item.price}</p>
          <p className="description">{item.description}</p>
          <p className="ingredients">
            <strong>Ingredients:</strong> {item.ingredients}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
