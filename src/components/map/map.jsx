import React, { useEffect, useRef } from "react";
import LocationImage from "../../assets/locationIcon.svg";

const loadYandexScript = () => {
  return new Promise((resolve) => {
    if (window.ymaps) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
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
        if (mapInstance.current) return;

        mapInstance.current = new window.ymaps.Map(mapRef.current, {
          center: [55.752023, 37.617499],
          zoom: 16,
          controls: ["zoomControl", "fullscreenControl"],
        });

        const placemark = new window.ymaps.Placemark(
          [55.752023, 37.617499],
          {
            hintContent: "Московский Кремль",
            balloonContent: `
              <div style="font-weight: 600; font-size: 16px;">
                Московский Кремль
              </div>
              <div>Здесь находится главный комплекс исторических зданий Москвы.</div>
            `,
          },
          {
            iconLayout: "default#image",
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
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    />
  );
};

export default MapComponent;
