import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './components/navbar/navbar'
import Video from './components/video/video'
import Cards from './components/cards/cards'
import MainCard from './components/cards/mainCard'
import MainForm from './components/forms/mainForm'
import Contacts from './components/contacts/contacts'

function App() {

  return (
    <div className='main-page-container'>
      <Navbar/>
      <Video/>
      <MainCard/>
      <MainForm/>
      <Contacts/>
    </div>
  )
}

export default App
