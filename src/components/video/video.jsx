import "./video.scss";
import video from "../../assets/vid1.mp4";
import arrowButton from "../../assets/ArrowButton.svg";

const Video = () => {
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
        <div className="video-text-p">Просто потому что можем</div>
        <div className="video-text-label">
          <div>Мы запустили основной цикл в 06:42.</div>
          <div>Результаты наблюдаются, но не зафиксированы.</div>
          <div>Рекомендуем сохранять спокойствие до </div>
          <div>следующего сигнала.</div>
        </div>
        <button className="video-button">
          Попробовать просто так
          <img className="arrow-image-button" src={arrowButton}></img>
        </button>
      </div>
      <div className="sertificate-info">
        <div>Сертификат есть. Но это не точно.</div>
        <div>СГР №AM.01.01 .01.003.R.00 o47 4.06.24</div>
      </div>
    </div>
  );
};

export default Video;
