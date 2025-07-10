import React from "react";
import "./cards.scss";

const Cards = ({
  image,
  title,
  description,
  backgroundSize = "120%",
  isMain,
  isMobile,
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
        <h3 className={`card-title ${isMobile ? "mobile-title" : ""}`}>
          {title}
        </h3>
        {isMobile && Array.isArray(description) ? (
          <div className="card-description-mobile">
            {description.map((line, i) => (
              <p key={i} className={`desc-line line-${i}`}>
                {line}
              </p>
            ))}
          </div>
        ) : (
          <p className="card-description">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Cards;
