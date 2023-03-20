import {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';


export default function Games() {

  var [lastAnswer, setLastAnswer] = useState();

  var [displayQuestion, setDisplayQuestion] = useState(true);
  var [displayScore, setDisplayScore] = useState(false);

  const [startGame, setStartGame] = useState(false); 

  const [jsonData, setJsonData] = useState(null);


  var [correct, setCorrect] = useState(0); 

  var [wrong, setWrong] = useState(0); 

  var [total, setTotal] = useState(0); 


  //flash a message if they were wrong or right
  const checkAnswer = (event) => {
    if(jsonData.answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'") === event.target.value) {
      setLastAnswer(true);
      setCorrect(++correct);
    }
    else {
      setLastAnswer(false);
      setWrong(++wrong);
    }
    setTotal(++total);

    setDisplayQuestion(false);
    setDisplayScore(true);
  };

  //could fetch 10 questions for an entire game so no more synch waiting
  useEffect(() => {
    fetchQuestion();
    },[]);

  function fetchQuestion() {

    fetch('http://localhost:5000/trivia')
        .then(response => response.json())
        .then((data) => {setJsonData(data)
          setDisplayQuestion(true);
          setDisplayScore(false);})
        .catch(error => console.error(error));

    document.getElementById('questionDiv').className = 'border-2 p-2 border-black';      
  }

  function ScoreDisplay () {

    document.getElementById('questionDiv').className = lastAnswer ? 'p-2 border-2 border-green-500' : 'p-2 border-2 border-red-500'; 

    console.log(document.getElementById('questionDiv').className);

    return (
      <div>
        {lastAnswer && <p className='text-green-500'>Correct!</p>}
        {!lastAnswer && <div><p className='text-red-500'>Correct answer: {jsonData.answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</p></div>}
      </div>
    );
    
  }

  function startClicked(){
    console.log('start clicked');
    if (jsonData){
      console.log(jsonData);
      setStartGame(true);
    }
  }

  function NextQuestion () {

    return (
      <button className='text-blue-500 px-2 hover:font-bold border-2 border-blue-500 rounded-2xl bg-orange-300 hover:bg-orange-600' onClick={fetchQuestion}>Next Question</button>
    );
  }

  function Score() {
    return (
      <p className='bg-gray-200 border-2 border-black rounded-lg p-1 '>Score: {correct} / {total} ({(correct*100/total).toFixed(2)}%)</p>
    );
  }

  function TriviaQuestion(props) {

    //randomize the location of the correct answer
    useEffect(()=>{
      var pos = Math.floor(Math.random()*4)+1;
      document.getElementById("choice1").className += (' row-start-' + pos);
    },[]);
  
    return (
      <div>
        <p>Trivia</p>
        <p>{props.question}</p>
        <div className='grid gap-2'>
          <input className='border-2 border-blue-500 hover:bg-blue-200' id="choice1" onClick={checkAnswer} type="button" value={props.answer}></input>
          <input className='border-2 border-blue-500 hover:bg-blue-200' id="choice2" onClick={checkAnswer} type="button" value={jsonData.choices[0].replace(/&quot;/g, '"').replace(/&#039;/g, "'")}></input>
          <input className='border-2 border-blue-500 hover:bg-blue-200' id="choice3" onClick={checkAnswer} type="button" value={jsonData.choices[1].replace(/&quot;/g, '"').replace(/&#039;/g, "'")}></input>
          <input className='border-2 border-blue-500 hover:bg-blue-200' id="choice4" onClick={checkAnswer} type="button" value={jsonData.choices[2].replace(/&quot;/g, '"').replace(/&#039;/g, "'")}></input>
        </div>
      </div>
    
    );
  }

    return (
      <div className='h-screen p-1 bg-yellow-700'>
        <NavBar />
        <div className='flex bg-white w-1/2 sm:w-3/4 h-3/4 sm:h-3/4 border-2 border-black rounded-3xl items-center justify-center'>
            <div className='flex flex-col'>
              <div>{startGame && <Score/>}</div>
              <div id='questionDiv' className='border-2 border-black p-2'>{startGame && <TriviaQuestion question={jsonData.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")} answer={jsonData.answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}/>}
              {!startGame && <button className='text-blue-600' onClick={startClicked}>Start</button>}</div>
              <div>{displayScore && <ScoreDisplay />}</div>
              <div className=''>{!displayQuestion && startGame && <NextQuestion/>}</div>
            </div>
        </div>
      </div>
    
    );
  }