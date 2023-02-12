import './App.css';
import { Routes, Route } from 'react-router-dom';
import Hangman from './components/Hangman';
import Landing from './components/Landing';


//routes either render Landing page or game page dependent on link clicked
function App() {

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
