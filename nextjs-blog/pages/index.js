import NavBar from '../components/NavBar.js';
import Button from '../components/Button.js';
// import './styles/main.css';

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1 className='text-blue hover:text-cyan-300'>Home Page</h1>

      <Button path='games' name='Click to Start'/>
    </div>
  )
}