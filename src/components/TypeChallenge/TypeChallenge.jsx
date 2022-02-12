import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './TypeChallenge.css'

export default function TypeChallenge({paragraph,word,wpm,timerStart,timeRemain,characters,testinfo,OnUserChange}) {
  return <div className='type-challenge-container'>
      <div className="timer-container">
          <p className="timer">00:{timeRemain}</p>
          <p className="timer-info">
              {!timerStart && 'Start Typing Now...'}</p>
      </div>
      
      <div className="type-challenge">
          <div className="textarea-left">
          <div className="paragraph">
              {testinfo.map((individualLetter,index)=>{
                  return <TestLetter  key ={index} individualLetter={individualLetter}/>
              })}
          </div>
          </div>
          <div className="text-area-right">
              <textarea className='textarea' placeholder='Type here' onChange={(e)=>OnUserChange(e.target.value)} type='text'></textarea>
          </div>
      </div>
  </div>;
}
