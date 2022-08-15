import React from 'react'
import CV from '../../images/Resume.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn animate__animated animate__bounceIn'>Download CV</a>
        <a href="#contact" className='btn btn-primary animate__animated animate__bounceIn'>Let's Talk</a>
    </div>
  )
}

export default CTA
