
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Hangman from './components/Hangman';
import Landing from './components/Landing';



function App() {

 /*  let [totalCountPress, setTotalCountPress] = useState(0);
  window.addEventListener('keydown', function (e) {
    
    setTotalCountPress(totalCountPress + 1)
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
  }, false); */
  return (
    <>
      
      <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route path='/game' element={<Hangman/>}/>
      </Routes>
      
    </>
  );
}

export default App;
