import "./mainForm.scss";
import ArrowAbout from "../../assets/arrowAbout.svg";
import SberIcon from "../../assets/sbericon.svg";
import ButtonArrow from "../../assets/ButtonArrow.svg";
import { useState } from "react";

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "");

  let result = "+7 ";

  if (digits.length > 1) {
    result += "(" + digits.substring(1, 4);
  }
  if (digits.length >= 4) {
    result += ") " + digits.substring(4, 7);
  }
  if (digits.length >= 7) {
    result += " " + digits.substring(7, 9);
  }
  if (digits.length >= 9) {
    result += " " + digits.substring(9, 11);
  }

  return result;
};

const MainForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [agreed, setAgreed] = useState(false);

  const handlePhoneChange = (e) => {
    const input = e.target.value;

    if (input.length < phone.length) {
      setPhone(input);
      return;
    }

    const formatted = formatPhone(input);
    setPhone(formatted);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Пожалуйста, согласитесь на обработку данных");
      return;
    }
    console.log("Имя:", name);
    console.log("Телефон:", phone);
    console.log("Согласен:", agreed);
    alert("Форма отправлена, можете проверить в console.log");
    setName("");
    setPhone("+7 ");
    setAgreed(false);
  };

  return (
    <div className="main-form-container">
      <div className="main-form-box">
        <div className="text-wrapper">
          <div className="text-about-form-container">
            <div>Если вы тоже решили</div>
            <div>«а почему бы и нет»</div>
          </div>
          <div className="text-about-options">
            <div>
              <img src={ArrowAbout} alt="ArrowAbout" />
              Можно заказать много
            </div>
            <div>
              <img src={ArrowAbout} alt="ArrowAbout" />
              Доступ возможен через северный интерфейс
            </div>
            <div>
              <img src={ArrowAbout} alt="ArrowAbout" />
              Можно просто поболтать
            </div>
          </div>
        </div>
      </div>

      <div className="main-form-box">
        <form className="form-container" onSubmit={handleOnSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
          />
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={18}
            placeholder="+7 (___) ___ __ __"
          />

          <label
            className="icon-and-text-box"
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              userSelect: "none",
            }}
          >
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              style={{ display: "none" }}
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              {/* Круг с выступом */}
              <path
                d="M21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89471 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17293 13.7558C2.82567 12.01 3.0039 10.2004 3.68508 8.55585C4.36627 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              {/* Галочка, показывается только если checked */}
              {agreed && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.7236 10.9795C9.3416 10.5805 8.7096 10.5645 8.3096 10.9465C7.9106 11.3275 7.8946 11.9605 8.2766 12.3605L10.4996 14.6905C10.6876 14.8875 10.9476 14.9995 11.2196 15.0005H11.2236C11.4946 15.0005 11.7536 14.8905 11.9416 14.6955L18.7186 7.69552C19.1026 7.29852 19.0926 6.66552 18.6956 6.28152C18.2976 5.89652 17.6646 5.90852 17.2816 6.30452L11.2286 12.5575L9.7236 10.9795Z"
                  fill="white"
                />
              )}
            </svg>
            <span>
              Согласен(-на) на обработку чего угодно — лишь бы форма работала
            </span>
          </label>

          <button type="submit" className="contact-button">
            Отправить
            <img src={ButtonArrow} alt="ButtonArrow" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainForm;
