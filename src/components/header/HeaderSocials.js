import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoGithub} from 'react-icons/io';
import {FaFacebookSquare} from 'react-icons/fa'
import Rotate from 'react-reveal/Rotate';
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
    <Rotate top left>
    <a href="https://www.linkedin.com/in/muhammad-rafay-2b798b1bb"  rel="noreferrer" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/ChaudharyRafay"  rel="noreferrer" target="_blank">{<IoLogoGithub/>}</a>
    <a href="https://www.facebook.com/muhammad.rafay.7509836"  rel="noreferrer" target="_blank">{<FaFacebookSquare/>}</a>
    </Rotate>
  </div>
  )
}

export default HeaderSocials
