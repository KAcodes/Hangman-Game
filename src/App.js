
import './App.css';
import {useState} from 'react'
import Word from './components/Word';
import {Container} from 'react-bootstrap'

function App() {

 /*  let [totalCountPress, setTotalCountPress] = useState(0);
  window.addEventListener('keydown', function (e) {
    
    setTotalCountPress(totalCountPress + 1)
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
  }, false); */
  return (
    <>
      
      
      <Container fluid>
      <Word/>
      </Container>
    </>
  );
}

export default App;
