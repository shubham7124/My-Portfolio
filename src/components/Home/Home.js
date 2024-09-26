import React from 'react'
import "./Home.css";
import Social from './Social';
import Data from './Data';
import ScorllDown from './ScorllDown';

export default function Home() {
  return (
    <section className='home section' id='home'>
        <div className='home__container container grid'>
            <div className='home__content grid'>
                
                <Social/>

                <div className='home__img'></div>

                <Data/>

            </div>
    
            <ScorllDown/>
        </div>
    </section>
  )
}
