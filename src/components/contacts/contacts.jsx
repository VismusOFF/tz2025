import "./contacts.scss";
import LocationIcon from "../../assets/locationIcon.svg";
import TimeIcon from "../../assets/timeIcon.svg";
import PhoneIcon from "../../assets/phoneIcon.svg";
import EmailIcon from "../../assets/emailIcon.svg";
import ButtonArrow from "../../assets/ButtonArrow2.svg";
import MapComponent from "../map/map";

const Contacts = () => {
  return (
    <div className="contacts-main-container">
      <div className="contacts-box">
        <div className="contacts-box-flex">
          <div className="contacts-content">
            <h3>Контакты</h3>
            <div className="contacts-info">
              <div>
                {" "}
                <img src={LocationIcon} alt="LocIco" />
                Офис, где делают странные, но симпатичные вещи
              </div>
              <div>
                <img src={TimeIcon} alt="timeIco" /> Пн-Пт с 10:00 до 20:00
              </div>
              <div className="phone-box">
                <div className="phone-margin">
                  <img src={PhoneIcon} alt="PhoneIco" />8 (800) 444 44 44{" "}
                </div>
                <div>
                  <img src={PhoneIcon} alt="PhoneIco" />8 (800) 888 88 88{" "}
                </div>
              </div>
              <div>
                <img src={EmailIcon} alt="EmailIco" />
                example@mail.ru
              </div>
            </div>
            <button type="submit" className="submit-button">
              Связаться <img src={ButtonArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="map-box">
        <MapComponent />
      </div>
    </div>
  );
};

export default Contacts;
