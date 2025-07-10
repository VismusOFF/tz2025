import React, { useState } from "react";
import "./navbar.scss";
import MenuIcon from "../../assets/menu.svg";
import "./navbar.responsive.scss";

const buttons = [
  "О системе",
  "Архитектура",
  "Мнения",
  "Попробовать",
  "Для своих",
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="logo-icon" />

        <div className="navigation-buttons-containers">
          <div className="desktop-nav">
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

          <div className="menu-icon" onClick={handleDrawerToggle}>
            <img src={MenuIcon} alt="Menu" />
          </div>
        </div>
      </div>

      {drawerOpen && (
        <div className="drawer-overlay">
          <div className="drawer-content">
            <button className="drawer-close" onClick={handleDrawerToggle}>
              &times;
            </button>

            {buttons.map((text, index) => (
              <button
                key={index}
                className="drawer-link"
                onClick={() => {
                  setActiveIndex(index);
                  setDrawerOpen(false);
                }}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
