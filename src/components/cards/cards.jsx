import React from "react";
import "./cards.scss";

const Cards = ({
  image,
  title,
  description,
  backgroundSize = "120%",
  isMain,
}) => {
  return (
    <div
      className={`card ${isMain ? "main-card" : ""}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: backgroundSize,
      }}
    >
      <div className="gradient-overlay" />
      <div className="card-text">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
