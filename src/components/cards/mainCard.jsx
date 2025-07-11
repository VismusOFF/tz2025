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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 640;
  const cardsData = [
    {
      image: Image1,
      backgroundSize: "180%",
      title: "Немного упругости",
      description: isMobile
        ? ["Чуть-чуть сияния,", "и ощущение, что вы о себе позаботились"]
        : "Чуть-чуть сияния, и ощущение, что вы о себе позаботились",
    },
    {
      image: Image2,
      backgroundSize: "cover",
      title: "Немного упругости",
      description: isMobile
        ? ["Чуть-чуть сияния,", "и ощущение, что вы о себе позаботились"]
        : "Чуть-чуть сияния, и ощущение, что вы о себе позаботились",
    },
    {
      image: Image3,
      backgroundSize: "cover",
      title: "Немного упругости",
      description: isMobile
        ? ["Чуть-чуть сияния,", "и ощущение, что вы о себе позаботились"]
        : "Чуть-чуть сияния, и ощущение, что вы о себе позаботились",
    },
    {
      image: Image4,
      backgroundSize: "cover",
      title: "Немного упругости",
      description: isMobile
        ? ["Чуть-чуть сияния,", "и ощущение, что вы о себе позаботились"]
        : "Чуть-чуть сияния, и ощущение, что вы о себе позаботились",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTablet = windowWidth > 640 && windowWidth <= 960;
  const isDesktop = windowWidth > 960;

  const isSmallScreen = windowWidth <= 960;

  const leftPanelWidthPx = isSmallScreen ? 232 : 236;
  const gapPx = isSmallScreen ? 8 : 16;
  const cardFixedWidthPx = isSmallScreen ? 250 : 300;

  const visibleCount = isMobile
    ? 2.4
    : isTablet
    ? 2.7
    : windowWidth > 1400
    ? 4
    : 3;

  const sliderWidthPx =
    visibleCount * cardFixedWidthPx + (visibleCount - 1) * gapPx;

  const totalCards = cardsData.length;

  useEffect(() => {
    const maxStartIndex = Math.max(totalCards - visibleCount, 0);
    if (startIndex > maxStartIndex) setStartIndex(maxStartIndex);
  }, [visibleCount, totalCards, startIndex]);

  const maxStartIndex = Math.max(totalCards - visibleCount, 0);

  const handlePrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));

  const DRAG_THRESHOLD = 50;
  let animationFrameId = null;

  const onDragStart = (e) => {
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setDragging(true);
  };

  const onDragMove = (e) => {
    if (!dragging || dragStartX === null) return;

    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const offset = clientX - dragStartX;

    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    animationFrameId = requestAnimationFrame(() => {
      setDragOffset(offset);
    });

    if (e.type === "touchmove") e.preventDefault();
  };

  const onDragEnd = (e) => {
    if (!dragging) return;

    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    const clientX =
      e.type === "touchend" && e.changedTouches
        ? e.changedTouches[0].clientX
        : e.clientX;

    const diffX = clientX - dragStartX;

    if (diffX > DRAG_THRESHOLD) handlePrev();
    else if (diffX < -DRAG_THRESHOLD) handleNext();

    setDragging(false);
    setDragStartX(null);
    setDragOffset(0);
  };

  const slideStepPx = cardFixedWidthPx + gapPx;
  const translateX = -startIndex * slideStepPx + dragOffset;

  return (
    <div
      className="card-main-container"
      style={{
        marginTop: 96,
        height:
          windowWidth <= 640
            ? 400 // Для мобилок
            : windowWidth <= 960
            ? 350 // Для планшетов
            : 546, // Для десктопа
        display: "flex",
        fontFamily: "GropledBold, sans-serif",
        fontWeight: 700,
        fontSize: windowWidth <= 960 ? 28 : 40,
      }}
    >
      <div
        className="info-main-container"
        style={{
          width: leftPanelWidthPx,
          display: "flex",
          flexDirection: "column",
          height: isSmallScreen ? "auto" : 450,
          padding: isSmallScreen ? 0 : 16,
          boxSizing: "border-box",
          position: "relative",
          zIndex: 10,
          color: "#000",
          textShadow: "0 0 4px rgba(255,255,255,0.7)",
          margin: isSmallScreen ? 0 : undefined,
          marginBottom: isSmallScreen ? 24 : undefined,
        }}
      >
        <div className="info-card-container">
          {isMobile && "Это — не совсем то, что вы думаете"}
          {isTablet &&
            "Это — не\nсовсем то, что\n вы думаете"
              .split("\n")
              .map((line, i) => <div key={i}>{line}</div>)}
          {isDesktop && "Это — не совсем то, что вы думаете"}
        </div>

        <div
          className="arrow-button-container"
          style={{
            marginTop: "auto",
            display: "flex",
            gap: 8,
            marginBottom: "0px",
          }}
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
          zIndex: 1,
        }}
      >
        <div
          className="cards-wrapper"
          style={{
            display: "flex",
            gap: gapPx,
            height: "100%",
            width: totalCards * cardFixedWidthPx + (totalCards - 1) * gapPx,
            transform: `translateX(${translateX}px)`,
            transition: dragging ? "none" : "transform 0.4s ease",
            zIndex: 1,
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
                  isMobile={isMobile}
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
