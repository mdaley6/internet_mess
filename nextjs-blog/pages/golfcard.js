import {useState} from 'react';
import NavBar from '../components/NavBar';


export default function GolfCards() {

    var [currentCard, setCurrentCard] = useState(null);


    function GolfCard(){

        return (
            <div className='border-2 border-black w-3/4 rounded-3xl p-4'>
                <p className='font-bold text-xl border-b-2 border-white'>I am a golf header</p>
                <p> I am a golf card description</p>
            </div>
        );
    }

    function generateCard(){
        console.log('card');

        setCurrentCard(<GolfCard/>);
    }


    return (
      <div className=''>
        <NavBar />
        <div className='bg-blue-300'>
            <h1 className='text-3xl'>Golf Card Generator</h1>
            <p>Parameters</p>
            <p>Players</p>
            <select name="number">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
            
            <label for="team-game">Team Game:</label>
            <input type="radio" id="team-game-yes" name="team-game" value="yes"></input>
            <label for="team-game-yes">Yes</label>
            <input type="radio" id="team-game-no" name="team-game" value="no" checked></input>
            <label for="team-game-no">No</label>

            <label for="game-length">Game Length:</label>
            <select id="game-length" name="game-length">
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="9">9</option>
                <option value="18">18</option>
            </select>
            <button className='border-2 border-yellow-400 hover:border-yellow-600 bg-green-200 rounded m-2 p-1 hover:bg-green-500' onClick={generateCard}>Generate Card</button>
            {currentCard}
        </div>
      </div>
    
    );
  }