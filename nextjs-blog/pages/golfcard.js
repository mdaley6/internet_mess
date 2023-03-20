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
            <p>Set Parameters</p>
            <p>parameter 1</p>
            <p>parameter 2</p>
            <button className='border-2 border-yellow-400 hover:border-yellow-600 bg-green-200 rounded m-2 p-1 hover:bg-green-500' onClick={generateCard}>Generate Card</button>
            {currentCard}
        </div>
      </div>
    
    );
  }