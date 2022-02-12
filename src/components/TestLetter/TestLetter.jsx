import React from 'react';
import './TestLetter.css'
export default function TestLetter({individualLetter}) {
    const status = individualLetter.status
    const StatusChange = {
        correct:"test-letter-correct",
        incorrect:"test-letter-incorrect",
        notattempted:"test-letter-notattempt"
    }[status]
  return <>
      <span className={`test-lette ${StatusChange}`}>{individualLetter.testLetter}</span>
  </>
}
