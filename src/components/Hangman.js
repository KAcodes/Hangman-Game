import React, {useState, useEffect} from 'react';
import { Container ,Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Letter from './Letter';
import MissingLetter from './MissingLetter';
import Navbar from './Navbar';
import findWord from './dictionary';
import { hideButtons, showButtons } from './toggleKeyboard';


const Hangman = () => {

    //create states of word, number of correct and incorrect guesses to zero, and creates an array for the right letters to be stored into
    const [myWord, setMyWord] = useState('');
    const [correctLetters, setCorrectLetters] = useState([]);
    const [incorrectCount, setIncorrectCount] = useState(0);
    let correctCount = 0;

    //use effect sets word to random word generated from imported function
    useEffect(() => {
        setMyWord(findWord)
    }, []);
    

    //map each letter within word to an underscore, if letter is guessed correctly and in correct letters array, then the underscore is  replaced with this letter
    //correct count is increased for each correct letter
    const displayWord = myWord.split('').map((thisLetter, index) => {
        if(correctLetters.includes(thisLetter)) {
            correctCount++
            return <Letter key={index} letter={thisLetter}/>
        } else {
            return <MissingLetter key={index}/>
        }       
    });
    

    //when letter is guessed, if right then add to correct letters array, after each press make that button disappear
    const guessLetter = (e) => {
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


    //every letter in alphabet is mapped into a button which is displayed as an onscreen keyboard
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'] 
    const displayAlphabet = alphabet.map((letter, index) =>  <Col key={index}><Button type='button' className='alphabetBtn m-1 btn-light' onClick={guessLetter} key={index}>{letter}</Button></Col>)


    //if restart is clicked then states are all set back to their original states
    const restart = () => {
        setCorrectLetters([]);
        setIncorrectCount(0);
        setMyWord(findWord);
        showButtons();
    }


    //if user wins or loses empty jsx tag then states the outcome on page 
    let outcome = <></>;
    if (incorrectCount === 10) {
        outcome = <><h3>HUNG!</h3><h5>Oh no you have lost! The correct word was '{myWord}'. To try again please click on the restart button.</h5></>
        hideButtons();
    };
    if (correctCount === displayWord.length && correctCount !== 0) {
        outcome = <><h3>You Win!</h3><h5>Well done you correctly guessed the word! To try and win again click on the restart button.</h5></>
        hideButtons();
    };
    
    
    return(
        <Container fluid >
            <Row>
                <Col className='m-1'>
                    <Button variant="dark" onClick={restart}>Restart</Button>
                    <Navbar/>
                </Col>
                <h1 className='text-center'>Hangman</h1>
            </Row>
            <Row className='text-center my-4'>
                {displayWord}
            </Row>
            <Row className='text-center' >  
                {displayAlphabet}   
            </Row>
            <Row className='text-center my-2'>
                <Col md={9}>
                    <img src={require(`../images/state${incorrectCount + 1}.jpg`)} alt='hangman'/>
                    {outcome}
                </Col>
                <Col>
                    <div className='align-middle'>Need Help? Click on Home on the dropdown menu at the top of the page, to see the instructions again.</div> 
                </Col>
            </Row>
        </Container>
    )
}

export default Hangman;