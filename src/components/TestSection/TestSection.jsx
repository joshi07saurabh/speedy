import React from 'react';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import TrySection from '../TrySection/TrySection';
import './TestSection.css'


export default function TestSection({
  characters,
  word,
  wpm,
  paragraph,
  timerStart,
  timeRemain,
  testinfo,
  OnUserChange,
  startAgain
}) {
  return <div className='test-container'>
    {timeRemain > 0 ? (<div className="typing-challenge-cont">

<TypingChallenge characters={characters} word={word} wpm={wpm} paragraph={paragraph} timerStart={timerStart} timeRemain={timeRemain} testinfo={testinfo} OnUserChange={OnUserChange} startAgain={startAgain}/>
</div>)  
:(      <div className="try-container">
            <TrySection characters={characters} word={word} wpm={wpm} startAgain={startAgain}/>
</div>)}

  </div>;
}
