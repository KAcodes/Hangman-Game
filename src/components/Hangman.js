import React, {useState, useEffect} from 'react';
import { Container ,Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Letter from './Letter';
import MissingLetter from './MissingLetter';
import Navbar from './Navbar';
import findWord from './dictionary';



const Hangman = () => {

    //chosen word
    const [myWord, setMyWord] = useState('');
    useEffect(() => {
        setMyWord(findWord)
    }, []);
    
    const [isGameWon, setIsGameWon] = useState(false);
    
    
    //setstate of guesses 
    const [correctLetters, setCorrectLetters] = useState([]);
    const [incorrectCount, setIncorrectCount] = useState(0);
    let correctCount = 0;
    
    

    const displayWord = myWord.split('').map((thisLetter, index) => {
        if(correctLetters.includes(thisLetter)) {
            correctCount++
            return <Letter key={index} letter={thisLetter}/>
        } else {
            return <MissingLetter key={index}/>
        }       
    });

    useEffect(() => {
        if (correctCount === displayWord.length && correctCount !== 0) {
            setIsGameWon(true)
        }
    });
    
    const foundLetter = (e) => {
        e.preventDefault();
        const letterPressed = e.target.innerHTML.toLowerCase();
        if (myWord.split('').includes(letterPressed)) {
            setCorrectLetters([...correctLetters, letterPressed]);
            e.target.style.visibility = 'hidden';
            
        }
        else {
            e.target.style.visibility = 'hidden';
            setIncorrectCount(incorrectCount + 1)
        }
    }



    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 

    const displayAlphabet = alphabet.map((letter, index) =>  <Col><button onClick={foundLetter} key={index}>{letter}</button></Col>)

    
    
    return(
        <>  
        
        {incorrectCount < 11 ? 
            <Container fluid>
            <Row>
                <Col>
                    <Navbar/>
                </Col>
            </Row>
            
            <Row>
                {displayWord}
            </Row>
            <Row>
                {displayAlphabet}
            </Row>
            <Row>
                <Col>
                    <img src={require(`../images/state${incorrectCount + 1}.jpg`)}/>
                </Col>
            </Row>
            <br></br>
            <div>Incorrect count = {incorrectCount}</div> 
            </Container>
            : <div>Sorry you lost!</div>
             }
             {isGameWon && <h1>You Won!</h1>}
            
        
        </>
    )
}

export default Hangman;