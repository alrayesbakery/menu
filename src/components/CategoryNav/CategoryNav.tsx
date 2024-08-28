import React, { useRef, useEffect } from "react";
import "./index.css";

interface Props {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryNav: React.FC<Props> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const centerActiveCategory = () => {
      if (navRef.current) {
        const activeButton = navRef.current.querySelector(".active");
        if (activeButton) {
          activeButton.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      }
    };

    centerActiveCategory();
  }, [activeCategory]);

  return (
    <nav className="category-nav">
      <ul ref={navRef}>
        {categories.map((category) => (
          <li key={category}>
            <button
              className={activeCategory === category ? "active" : ""}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;
