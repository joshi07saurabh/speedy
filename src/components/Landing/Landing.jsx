import React from 'react';
import Flash from './../../assets/Flash.jpg'
import './Landing.css'
import Typewriter from 'typewriter-effect';

export default function Landing() {
  return <div className='landing-container'>
            <div data-aos='fade-right'>
            <h1 className="landing-header">Can You type...</h1>
            <div className="typewriter-container">
            <Typewriter
  options={{
    strings: ['Fast?', 'Correct?','Quick?'],
    autoStart: true,
    loop: true,
  }}
/>            
            </div>
            </div>
            <div className="header-img">
                <img data-aos='fade-left'src={Flash} alt="header_image" />
            </div>
            
  </div>;
}
