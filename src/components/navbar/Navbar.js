import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import {MdHome} from 'react-icons/md'
import {FaRegQuestionCircle} from 'react-icons/fa'
import {FaBookReader} from 'react-icons/fa'
import {MdOutlineMedicalServices} from 'react-icons/md'
import {MdPermContactCalendar} from 'react-icons/md'
function Navbar() {
  const [activenav, setactivenav] = useState('#home')
  return (
    <nav>
    <div className='nav' data-aos="fade-up">
      <a href="#home" onClick={()=>{setactivenav('#home')}} className={activenav==='#home'?'active':''} cl><MdHome /></a>
      <a href="#about" onClick={()=>{setactivenav('#about')}} className={activenav==='#about'?'active':''}><FaRegQuestionCircle /></a>
      <a href="#experience" onClick={()=>{setactivenav('#experience')}} className={activenav==='#experience'?'active':''}><FaBookReader /></a>
      <a href="#services" onClick={()=>{setactivenav('#services')}} className={activenav==='#services'?'active':''}><MdOutlineMedicalServices /></a>
      <a href="#contact" onClick={()=>{setactivenav('#contact')}} className={activenav==='#contact'?'active':''}><MdPermContactCalendar /></a>

    </div>
    </nav>
  )
}

export default Navbar
