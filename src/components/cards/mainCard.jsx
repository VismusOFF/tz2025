import React, { useState, useEffect } from 'react';
import './mainCard.scss';

import ArrowLeft from '../icons/arrowLeft';
import ArrowRight from '../icons/arrowRigth';

import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/image3.jpg';
import Image4 from '../../assets/image4.jpg';

import Cards from './cards';

const FADE_DURATION = 300; // миллисекунд, длительность анимации

const MainCard = () => {
  const cardsData = [
    { image: Image1, backgroundSize: '180%', title: 'Немного упругости', description: 'Чуть-чуть сияния, и ощущение, что вы о себе позаботились' },
    { image: Image2, backgroundSize: 'cover', title: 'Немного упругости', description: 'Чуть-чуть сияния, и ощущение, что вы о себе позаботились' },
    { image: Image3, backgroundSize: 'cover', title: 'Немного упругости', description: 'Чуть-чуть сияния, и ощущение, что вы о себе позаботились' },
    { image: Image4, backgroundSize: 'cover', title: 'Немного упругости', description: 'Чуть-чуть сияния, и ощущение, что вы о себе позаботились' },
  ];

  const visibleCount = 3;
  const [startIndex, setStartIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in'); // 'fade-in' или 'fade-out'
  const [pendingIndex, setPendingIndex] = useState(null); // индекс, на который переключаем

  const getVisibleCards = (cards, start, count) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      const index = (start + i) % cards.length;
      result.push(cards[index]);
    }
    return result;
  };

  const visibleCards = getVisibleCards(cardsData, startIndex, visibleCount);

  const handleChangeIndex = (newIndex) => {
    if (fadeState === 'fade-out') return; // чтобы не запускать новую анимацию пока идёт текущая
    setFadeState('fade-out');
    setPendingIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (startIndex - 1 + cardsData.length) % cardsData.length;
    handleChangeIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (startIndex + 1) % cardsData.length;
    handleChangeIndex(newIndex);
  };

  // Эффект для переключения после fade-out
  useEffect(() => {
    if (fadeState === 'fade-out' && pendingIndex !== null) {
      const timeout = setTimeout(() => {
        setStartIndex(pendingIndex);
        setFadeState('fade-in');
        setPendingIndex(null);
      }, FADE_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [fadeState, pendingIndex]);

  return (
    <div className="card-main-container">
      <div className="info-main-container">
        <div className="info-card-container">
          Это не совсем то, что вы думаете
        </div>
        <div className="arrow-button-container">
          <span className="arrow-left-margin" onClick={handlePrev} style={{ pointerEvents: fadeState === 'fade-out' ? 'none' : 'auto' }}>
            <ArrowLeft />
          </span>
          <span onClick={handleNext} style={{ pointerEvents: fadeState === 'fade-out' ? 'none' : 'auto' }}>
            <ArrowRight />
          </span>
        </div>
      </div>

      <div className={`cards-list ${fadeState}`}>
        {visibleCards.map(({ image, backgroundSize, title, description }, index) => (
          <Cards
            key={index}
            image={image}
            backgroundSize={backgroundSize}
            title={title}
            description={description}
            isMain={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCard;
