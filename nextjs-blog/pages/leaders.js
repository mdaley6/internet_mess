import NavBar from '../components/NavBar';
import { useState, useEffect } from 'react';


export default function Leaders() {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
      fetch('http://localhost:5000/test')
        .then(response => response.json())
        .then(data => setJsonData(data))
        .catch(error => console.error("error fetch: " + error));
    }, []);


    return (
      <div>
        <NavBar />
        <h1 className='text-green'>Leader Board</h1>
        {jsonData ? <p>{JSON.stringify(jsonData)}</p> : "no data found"}
        {console.log(jsonData)}
      </div>
    
    );
  }