import React from 'react';
import TestSection from '../TestSection/TestSection';
import './ChallengeSection.css'


export default function ChallengeSection({paragraph,word,wpm,timerStart,timeRemain,characters,testinfo,OnUserChange,startAgain}) {
  
  return <div className='challenge-container'>
      <h1 className='challenge-header'>Take test now!</h1>
      <TestSection characters={characters} word={word} wpm={wpm} timerStart={timerStart} timeRemain={timeRemain} paragraph={paragraph} testinfo={testinfo} OnUserChange={OnUserChange} startAgain={startAgain}/>
  </div>;
}
