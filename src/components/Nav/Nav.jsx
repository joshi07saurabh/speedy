import React from 'react';
import logo from './../../assets/logo.jpg'
import './Nav.css'
export default function Nav() {
  return <div className='nav'>
            <div className="nav-left">
                <img className='img' src={logo} alt="logo" />
                <div className='nav-text'>Speed Checker</div>
            </div>
            
  </div>;
}
