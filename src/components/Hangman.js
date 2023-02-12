import React, {useState, useEffect} from 'react';
import { Container ,Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Letter from './Letter';
import MissingLetter from './MissingLetter';
import Navbar from './Navbar';
import findWord from './dictionary';

import { hideButtons, showButtons } from './toggleKeyboard';


const Hangman = () => {

    //setstate of guesses 
    const [myWord, setMyWord] = useState('');
    const [correctLetters, setCorrectLetters] = useState([]);
    const [incorrectCount, setIncorrectCount] = useState(0);
    let correctCount = 0;

    useEffect(() => {
        setMyWord(findWord)
    }, []);
    
    
    
    const displayWord = myWord.split('').map((thisLetter, index) => {
        if(correctLetters.includes(thisLetter)) {
            correctCount++
            return <Letter key={index} letter={thisLetter}/>
        } else {
            return <MissingLetter key={index}/>
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



    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'] 

    const displayAlphabet = alphabet.map((letter, index) =>  <Col><button className='alphabetBtn' onClick={foundLetter} key={index}>{letter}</button></Col>)

    const restart = () => {
        setCorrectLetters([]);
        setIncorrectCount(0);
        setMyWord(findWord);
    }

    let outcome = <></>;
    if (incorrectCount === 10) {
        outcome = <><h3>HUNG!</h3><p>Oh no! This time you have lost the game, the correct word was {myWord}. To try again please click on the restart button</p></>
        
        hideButtons();

    }
    if (correctCount === displayWord.length && correctCount !== 0) {
        outcome = <><h3>You Win!</h3><p>Well done you correctly guessed the word! To try and win again click on the restart button.</p></>

        hideButtons();
    }
    
    
    return(
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
                    <img src={require(`../images/state${incorrectCount + 1}.jpg`)} alt='hangman'/>
                    {outcome}
                </Col>
            </Row>
            <br/>
            <button onClick={() => {
                restart();
                showButtons();
            }
        }>Restart</button>
            <div>Need Help? Click on menu and the Home in the dropdown list at top of the page, to see the instructions again.</div> 
            
            </Container>
    )
}

export default Hangman;