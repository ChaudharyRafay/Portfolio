import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function Experience() {
  return (
   <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2 data-aos="flip-right">My Experience</h2>
    <div className="container experience_container ">
      <div className="experience_frontend" data-aos="flip-left"
     data-aos-easing="ease-out-cubic">
       <h3>Frontend Development</h3>
       <div className="experience_content">
        <article className='experience_details'>
         <BsPatchCheckFill className='experience_details-icon'/>
         <div>
         <h4>HTML</h4>
         <small className='text-light'>Professional</small>
         </div>
        </article>
        <article className='experience_details'>
         <BsPatchCheckFill className='experience_details-icon'/>
         <div>
         <h4>CSS</h4>
         <small className='text-light'>Professional</small>
         </div>
        </article>
        <article className='experience_details'>
         <BsPatchCheckFill className='experience_details-icon'/>
         <div>
         <h4>JavaScript</h4>
         <small className='text-light'>Advanced</small>
         </div>
        </article>
        <article className='experience_details'>
         <BsPatchCheckFill className='experience_details-icon'/>
         <div>
         <h4>Bootstrap</h4>
         <small className='text-light'>Advanced</small>
         </div>
        </article>
        <article className='experience_details'>
         <BsPatchCheckFill className='experience_details-icon'/>
         <div>
         <h4>React</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>
       </div>
      </div>
      <div className="experience_backend" data-aos="flip-left"
     data-aos-easing="ease-out-cubic">
      <h3>Backend Development</h3>
       <div className="experience_content">
        <article className='experience_details'>
         <BsPatchCheckFill className='experience_details-icon'/>
         <div>
         <h4>Node Js</h4>
         <small className='text-light'>Advanced</small>
         </div>
        </article>
        <article className='experience_details'>
         <BsPatchCheckFill className='experience_details-icon'/>
         <div>
         <h4>Express Js</h4>
         <small className='text-light'>Advanced</small>
         </div>
        </article>
        <article className='experience_details'>
         <BsPatchCheckFill className='experience_details-icon'/>
         <div>
         <h4>Mongo Db</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>
        <article className='experience_details'>
         <BsPatchCheckFill className='experience_details-icon'/>
         <div>
         <h4>Mongoose</h4>
         <small className='text-light'>Advanced</small>
         </div>
        </article>
        <article className='experience_details'>
         <BsPatchCheckFill className='experience_details-icon'/>
         <div>
         <h4>Php</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>
        <article className='experience_details'>
         <BsPatchCheckFill className='experience_details-icon'/>
         <div>
         <h4>Sql</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>
       </div>
      </div>
    </div>
   </section>
 
  )
}

export default Experience
