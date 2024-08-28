import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MenuList from "./components/MenuList/MenuList";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";
import { MenuItem } from "./types";
import { menuItems } from "./data/MenuItems";
import CategoryNav from "./components/CategoryNav/CategoryNav";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);
const categories = ["Manakeesh", "Mini Dozens", "Pizza", "Drinks"];

const App = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const sectionRefs = useRef<{ [key: string]: React.RefObject<HTMLElement> }>(
    {}
  );
  //test test
  useEffect(() => {
    categories.forEach((category) => {
      sectionRefs.current[category] = React.createRef<HTMLElement>();
    });
  }, []);

  const closeModal = () => setSelectedItem(null);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    sectionRefs.current[category].current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    let activeSection = categories[0];

    for (const category of categories) {
      const section = sectionRefs.current[category].current;
      if (section && scrollPosition >= section.offsetTop - 100) {
        activeSection = category;
      }
    }

    setActiveCategory(activeSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Header />
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <main>
        {categories.map((category) => (
          <section key={category} ref={sectionRefs.current[category]}>
            <h2>{category}</h2>
            <MenuList
              items={menuItems.filter((item) => item.category === category)}
              onItemClick={setSelectedItem}
            />
          </section>
        ))}
      </main>
      {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
      <Footer />
    </div>
  );
};

export default App;
