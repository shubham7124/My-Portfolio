import React from 'react'

export default function Info() {
  return (
    <div className='about__info grid'>
       <div className='about__box '>
         <i className='bx bx-award about__icon'></i>
           <h3 className='about__subtitile'>Experience</h3>
           <span className='about__subtitle'>Fresher </span>
       </div>

       <div className='about__box'>
         <i className='bx bx-briefcase-alt about__icon'></i>
           <h3 className='about__subtitile'>Completed</h3>
           <span className='about__subtitle'>3 + Project</span>
       </div>

       <div className='about__box'>
         <i className='bx bx-support about__icon'></i>
           <h3 className='about__subtitile'>Available</h3>
           <span className='about__subtitle'>Immediattely</span>
       </div>

    </div>
  )
}
