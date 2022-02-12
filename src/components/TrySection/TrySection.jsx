import React from 'react';
import './Try.css'

export default function TrySection({
  characters,
  word,
  wpm,
  startAgain
}) {
  return <div className='trysection-container'>
      <h1 className='trysection-header'>Test Result..</h1>
      <div className="trysection-content">
          <p>Characters : {characters}</p>
          <p>Words : {word} </p>
          <p>Speed : {wpm} wpm</p>
      </div>
      <div>
      <button onClick={()=>{startAgain()}} className='end-class retry'>Retry</button>
      <button
      onClick={()=>{
        window.open('https://www.facebook.com/sharer/sharer/.php?u=saurabhjoshi',
        'facebook-share-dialog',
        'width=800 , height=800')
      }} 
      className='end-class share'>Share</button>
      </div>
  </div>;
}
