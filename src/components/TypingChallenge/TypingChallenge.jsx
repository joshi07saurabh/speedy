import React from 'react';
import DetailsCard from '../DetailsCard/DetailsCard';
import TypeChallenge from '../TypeChallenge/TypeChallenge';
import './TypingChallenge.css'

export default function TypingChallenge({paragraph,word,wpm,timerStart,timeRemain,characters,testinfo,OnUserChange}) {
  return <div className='typing-challenge-container'>
      <div className="details-container">
            <DetailsCard cardname='Words' cardvalue={word}/>
            <DetailsCard cardname='Characters' cardvalue={characters}/>
            <DetailsCard cardname='Speed' cardvalue={wpm}/>
            
            
      </div>
      <div className="typing-container">
          <TypeChallenge paragraph={paragraph} timeRemain={timeRemain} timerStart={timerStart} testinfo={testinfo} OnUserChange={OnUserChange}/>
      </div>
  </div>;
}
