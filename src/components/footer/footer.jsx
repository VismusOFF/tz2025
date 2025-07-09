import "./footer.scss";
import LogoIcon from "../../assets/logoIcon.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div>
          <div>О системе</div>
          <div>Состав</div>
        </div>
        <div>
          <div>Архитектура</div>
          <div>Отзывы</div>
        </div>
        <div>Для своих</div>
      </div>

      <div className="footer-box">
        <div>
          <div>Коллаген © 2025</div>
          <div>Политика обработки чего-то личного</div>
        </div>
        <div>
          <img src={LogoIcon} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
