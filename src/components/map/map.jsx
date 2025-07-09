import React, { useEffect, useRef } from 'react';
import LocationImage from '../../assets/locationIcon.svg';

const loadYandexScript = () => {
  return new Promise((resolve) => {
    if (window.ymaps) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    script.async = true;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
};

const MapComponent = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    loadYandexScript().then(() => {
      window.ymaps.ready(() => {
        if (mapInstance.current) return; // карта уже создана

        mapInstance.current = new window.ymaps.Map(mapRef.current, {
          center: [55.751574, 37.573856],
          zoom: 14,
          controls: ['zoomControl', 'fullscreenControl'],
        });

        const placemark = new window.ymaps.Placemark(
          [55.751574, 37.573856],
          {
            hintContent: 'Москва',
            balloonContent: 'Здесь Москва',
          },
          {
            iconLayout: 'default#image',
            iconImageHref: LocationImage,
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42],
          }
        );

        mapInstance.current.geoObjects.add(placemark);
      });
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '100%', borderRadius: '24px' }}
    />
  );
};

export default MapComponent;
