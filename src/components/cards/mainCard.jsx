import React, { useState, useEffect } from "react";
import "./mainCard.scss";

import ArrowLeft from "../icons/arrowLeft";
import ArrowRight from "../icons/arrowRigth";

import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image4 from "../../assets/image4.jpg";

import Cards from "./cards";

const MainCard = () => {
  const cardsData = [
    {
      image: Image1,
      backgroundSize: "180%",
      title: "Немного упругости",
      description: "Чуть-чуть сияния, и ощущение, что вы о себе позаботились",
    },
    {
      image: Image2,
      backgroundSize: "cover",
      title: "Немного упругости",
      description: "Чуть-чуть сияния, и ощущение, что вы о себе позаботились",
    },
    {
      image: Image3,
      backgroundSize: "cover",
      title: "Немного упругости",
      description: "Чуть-чуть сияния, и ощущение, что вы о себе позаботились",
    },
    {
      image: Image4,
      backgroundSize: "cover",
      title: "Немного упругости",
      description: "Чуть-чуть сияния, и ощущение, что вы о себе позаботились",
    },
  ];

  const leftPanelWidthPx = 236;
  const gapPx = 16;
  const cardFixedWidthPx = 300;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 1400) {
      setVisibleCount(4);
    } else {
      setVisibleCount(3);
    }
  }, [windowWidth]);

  const sliderWidthPx =
    visibleCount * cardFixedWidthPx + (visibleCount - 1) * gapPx;

  const totalCards = cardsData.length;

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const maxStartIndex = Math.max(totalCards - visibleCount, 0);
    if (startIndex > maxStartIndex) {
      setStartIndex(maxStartIndex);
    }
  }, [visibleCount, totalCards, startIndex]);

  const maxStartIndex = Math.max(totalCards - visibleCount, 0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
  };

  const [dragStartX, setDragStartX] = React.useState(null);
  const [dragging, setDragging] = React.useState(false);
  const DRAG_THRESHOLD = 50;

  const onDragStart = (e) => {
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setDragging(true);
  };

  const onDragMove = (e) => {
    if (!dragging) return;
    if (e.type === "touchmove") e.preventDefault();
  };

  const onDragEnd = (e) => {
    if (!dragging) return;
    const clientX =
      e.type === "touchend" && e.changedTouches
        ? e.changedTouches[0].clientX
        : e.clientX;
    const diffX = clientX - dragStartX;

    if (diffX > DRAG_THRESHOLD) handlePrev();
    else if (diffX < -DRAG_THRESHOLD) handleNext();

    setDragging(false);
    setDragStartX(null);
  };

  const slideStepPx = cardFixedWidthPx + gapPx;
  const translateX = -startIndex * slideStepPx;

  return (
    <div
      className="card-main-container"
      style={{
        marginTop: 96,
        width: leftPanelWidthPx + sliderWidthPx,
        height: 546,
        display: "flex",
        fontFamily: "GropledBold, sans-serif",
        fontWeight: 700,
        fontSize: 40,
      }}
    >
      <div
        className="info-main-container"
        style={{
          width: leftPanelWidthPx,
          display: "flex",
          flexDirection: "column",
          height: 450,
          padding: 16,
          boxSizing: "border-box",
        }}
      >
        <div className="info-card-container">
          Это не совсем то, что вы думаете
        </div>
        <div
          className="arrow-button-container"
          style={{ marginTop: "auto", display: "flex", gap: 8 }}
        >
          <span
            className="arrow-left-margin"
            onClick={handlePrev}
            style={{
              cursor: startIndex === 0 ? "not-allowed" : "pointer",
              opacity: startIndex === 0 ? 0.5 : 1,
            }}
          >
            <ArrowLeft />
          </span>
          <span
            onClick={handleNext}
            style={{
              cursor: startIndex === maxStartIndex ? "not-allowed" : "pointer",
              opacity: startIndex === maxStartIndex ? 0.5 : 1,
            }}
          >
            <ArrowRight />
          </span>
        </div>
      </div>

      <div
        className="cards-list"
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={onDragStart}
        onTouchMove={onDragMove}
        onTouchEnd={onDragEnd}
        style={{
          overflow: "hidden",
          width: sliderWidthPx,
          height: "100%",
          userSelect: "none",
          position: "relative",
          cursor: dragging ? "grabbing" : "grab",
        }}
      >
        <div
          className="cards-wrapper"
          style={{
            display: "flex",
            gap: gapPx,
            height: "100%",
            width: totalCards * slideStepPx - gapPx,
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.4s ease",
          }}
        >
          {cardsData.map(
            ({ image, backgroundSize, title, description }, index) => (
              <div
                key={index}
                style={{
                  flex: `0 0 ${cardFixedWidthPx}px`,
                  maxWidth: `${cardFixedWidthPx}px`,
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <Cards
                  image={image}
                  backgroundSize={backgroundSize}
                  title={title}
                  description={description}
                  isMain={index === startIndex}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
