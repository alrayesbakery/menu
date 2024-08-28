import React from "react";
import "./index.css";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItem as MenuItemType } from "../../types";

interface Props {
  items: MenuItemType[];
  onItemClick: (item: MenuItemType) => void;
}

const MenuList: React.FC<Props> = ({ items, onItemClick }) => {
  return (
    <div className="menu-list">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} onClick={() => onItemClick(item)} />
      ))}
    </div>
  );
};

export default MenuList;
