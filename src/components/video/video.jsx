import { useEffect, useState } from "react";
import "./video.scss";
import "./video.responsive.scss";
import video from "../../assets/vid1.mp4";
import arrowButton from "../../assets/ArrowButton.svg";

const Video = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="video-container">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        src={video}
        type="video/mp4"
      >
        Ваш браузер не поддерживает видео.
      </video>

      <div className="video-text-main-container">
        <div className="video-text-p">
          <div>Просто потому</div>
          <div>что можем</div>
        </div>

        <div className="video-text-label">
          {screenSize <= 640 ? (
            <>
              <div>Мы сделали это средство не ради прибыли,</div>
              <div>а из любви к красивым словам. Один стик</div>
              <div>в день — и вы чувствуете, что делаете что-то</div>
              <div>важное. Что именно — решать вам.</div>
              <div>и красивой!</div>
            </>
          ) : screenSize <= 960 ? (
            <>
              <div>Мы сделали это средство не ради прибыли,</div>
              <div>а из любви к красивым словам. Один стик</div>
              <div>
                в день — и вы чувствуете, что делаете что-то важное. Что
              </div>
              <div>именно — решать вам.</div>
            </>
          ) : (
            <>
              <div>Мы запустили основной цикл в 06:42.</div>
              <div>Результаты наблюдаются, но не зафиксированы.</div>
              <div>Рекомендуем сохранять спокойствие до</div>
              <div>следующего сигнала.</div>
            </>
          )}
        </div>

        <button className="video-button">
          Попробовать просто так
          <img className="arrow-image-button" src={arrowButton} alt="→" />
        </button>
      </div>

      <div className="sertificate-info">
        <div>Сертификат есть. Но это не точно.</div>
        <div>СГР №AM.01.01</div>
        <div>.01.003.R.00 o47 4.06.24</div>
      </div>
    </div>
  );
};

export default Video;
