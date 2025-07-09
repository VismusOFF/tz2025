import React, { useState } from "react";
import "./navbar.scss";

const buttons = [
  "О системе",
  "Архитектура",
  "Мнения",
  "Попробовать",
  "Для своих",
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="navbar-container">
      <div className="logo-icon"></div>

      <div className="navigation-buttons-containers">
        {buttons.map((text, index) => (
          <button
            key={index}
            className={index === activeIndex ? "activeButton" : ""}
            onClick={() => setActiveIndex(index)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
