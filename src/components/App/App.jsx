import React from 'react';
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import './App.css'
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import { SAMPLE_PARAGRAPHS } from "../../data/sample";
const time=60
const url='http://metaphorpsum.com/paragraphs/1/9'
const defaultState={ 
  word:0,
  wpm:0,
  paragraph:'Hello India',
  characters:0,
  timerStart:false,
  timeRemain:time,
  testinfo:[]
 }
class App extends React.Component {
  state = defaultState ;
  fetchNewParagraphFallback = () => {
    const data =
        SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
        return {
            testLetter: selectedLetter,
            status: "notattempted",
        };
    });

    // Update the testInfo in state
    this.setState({
        ...defaultState,
        selectedParagraph: data,
        testInfo,
    });
};
  fetchNew = () =>{
    fetch(url).then((response) => response.text())
    .then((data)=>{
      this.setState({paragraph:data})
      const selectParagraphArray = this.state.paragraph.split('')
    const testinfo = selectParagraphArray.map((selectLatter)=>{
      return {
        testLetter:selectLatter,
        status:'notattempted'
      };
    });
    this.setState({...defaultState,testinfo,paragraph:data})
    })
   
  }
  
    componentDidMount (){
     this.fetchNew();
   
    
    }

     startTime = () =>{
       this.setState({timerStart:true});
       const timer = setInterval (() =>{
          if(this.state.timeRemain>0){
            const timespent=time-this.state.timeRemain;
            const wpm = timespent >0 ?(this.state.word/timespent)*time : 0;
            this.setState({
              timeRemain:this.state.timeRemain-1,
              wpm:parseInt(wpm)
            });
            
          }else{
              clearInterval(timer);
            }
          
       },1000);
      
      }
      startAgain = () =>{
        this.fetchNew();
      }
    handleUser = (inputVal)=>{
    if(!this.state.timerStart) this.startTime();
    const characters = inputVal.length;
    const word=inputVal.split(" ").length;
    const index = characters-1;
    if(index < 0){
      this.setState({
        testinfo :[
            {
              testLetter : this.state.testinfo[0].testLetter,
              status:'notattempted'
            },
            ...this.state.testinfo
        ],
        characters,
        word
      });
        return;
    }
    if(index >= this.state.paragraph.length){
        this.setState({characters,word});
        return;
    }
    const testinfo=this.state.testinfo;
    if(!(index===this.state.paragraph.length-1)){
      testinfo[index+1].status = 'notattempted';
    }
    // checked correct type letter
    const isCorrect = inputVal[index]===testinfo[index].testLetter;
    // update the testinfo
    testinfo[index].status=isCorrect ? 'correct':'incorrect';
    // update the state
    this.setState({
      testinfo,
      characters,
      word
    });
  }


  render() {
     
    return (
      <div>
      <Nav/>
      <Landing/>
      <ChallengeSection paragraph={this.state.paragraph} word={this.state.word} wpm={this.state.wpm} timerStart={this.state.timerStart} timeRemain={this.state.timeRemain} characters={this.state.characters} testinfo={this.state.testinfo} OnUserChange={this.handleUser} startAgain={this.startAgain}/>
      <Footer/>
  </div>
    );
  }
}

export default App ; 
  

