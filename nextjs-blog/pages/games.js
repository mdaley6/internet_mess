import Link from 'next/link';
import {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';


export default function Games() {

  const [startGame, setStartGame] = useState(false); 

  const [jsonData, setJsonData] = useState(null);

  function checkSubmission (){
    var answer = document.getElementById("answer").value;
    console.log(answer);
    if(jsonData.answer === answer) {
      console.log('CORRECT');
    }
    else {
      console.log('WRONG');
    }
  }

  useEffect(() => {
    fetch('http://localhost:5000/trivia')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error(error));
  }, []);

  function startClicked(){
    console.log('start clicked');
    if (jsonData){
      console.log(jsonData);
      setStartGame(true);
    }
  }

  function TriviaQuestion(props) {
    return (
      <div>
        <p>Trivia</p>
        <p>{props.question}</p>
        <input className='border-2 border-red-500' id="answer1" type="button" value={jsonData.choices[0]}></input>
        <input className='border-2 border-red-500' id="answer2" type="button" value={jsonData.choices[1]}></input>
        <input className='border-2 border-red-500' id="answer3" type="button" value={jsonData.choices[2]}></input>
        <input className='border-2 border-red-500' id="answer4" type="button" value={props.answer}></input>
      </div>
    
    );
  }

    return (
      <div className='h-screen p-1 bg-yellow-700'>
        <NavBar />
        <div className='flex bg-white w-1/2 sm:w-3/4 h-3/4 sm:h-3/4 border-2 border-black rounded-3xl items-center justify-center'>
            <div className='flex flex-col'>
              <button className='text-blue-600' onClick={startClicked}>Start</button>
              <div className=''>{startGame && <TriviaQuestion question={jsonData.question} answer={jsonData.answer}/>}</div>
            </div>
        </div>
      </div>
    
    );
  }