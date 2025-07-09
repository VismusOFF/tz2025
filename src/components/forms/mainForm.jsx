import './mainForm.scss'
import ArrowAbout from '../../assets/ArrowAbout.svg'
import SberIcon from '../../assets/SberIcon.svg'
import ButtonArrow from '../../assets/ButtonArrow.svg'
import { useState } from 'react'

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, '')

  let result = '+7 '

  if (digits.length > 1) {
    result += '(' + digits.substring(1, 4)
  }
  if (digits.length >= 4) {
    result += ') ' + digits.substring(4, 7)
  }
  if (digits.length >= 7) {
    result += ' ' + digits.substring(7, 9)
  }
  if (digits.length >= 9) {
    result += ' ' + digits.substring(9, 11)
  }

  return result
}

const MainForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('+7 ')

  const handlePhoneChange = (e) => {
    const input = e.target.value

    if (input.length < phone.length) {
      setPhone(input)
      return
    }

    const formatted = formatPhone(input)
    setPhone(formatted)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('Имя:', name)
    console.log('Телефон:', phone)
    alert('Форма отправлена, можете проверить в console.log')
    setName('')
    setPhone('+7 ')
  }

  return (
    <div className='main-form-container'>
      <div className='main-form-box'>
        <div className="text-wrapper">
          <div className='text-about-form-container'>
            <div>Если вы тоже решили</div>
            <div>«а почему бы и нет»</div>
          </div>
          <div className='text-about-options'>
            <div><img src={ArrowAbout} alt="ArrowAbout" />Можно заказать много</div>
            <div><img src={ArrowAbout} alt="ArrowAbout" />Доступ возможен через северный интерфейс</div>
            <div><img src={ArrowAbout} alt="ArrowAbout" />Можно просто поболтать</div>
          </div>
        </div>
      </div>

      <div className='main-form-box'>
        <form className='form-container' onSubmit={handleOnSubmit}>
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
          <div className='icon-and-text-box'>
            <img className='margin-right' src={SberIcon} alt="SberIcon" />
            Согласен(-на) на обработку чего угодно — лишь бы форма работала
          </div>
          <button type="submit" className="contact-button">
            Отправить
            <img src={ButtonArrow} alt="ButtonArrow" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default MainForm
