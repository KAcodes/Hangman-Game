import React, {useState, useEffect} from 'react';
import Letter from './Letter';
import MissingLetter from './MissingLetter';
import { Row, Col, Image} from 'react-bootstrap';
import findWord from './dictionary';

import 'bootstrap/dist/css/bootstrap.min.css';
import HangImage from './HangImage';




const Word = () => {

    const [myWord, setMyWord] = useState('');
    useEffect(() => {
        setMyWord(findWord)
    }, [])
    //chosen word
    

    /* const findWord = async() => {
        const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf')

        const word = response.json()
    } */
    //setstate of guesses 
    const [correctGuesses, setCorrectGuesses] = useState([]);
    const [incorrectCount, setIncorrectCount] = useState(0);
    
    

    const displayWord = myWord.split('').map((thisLetter, index) => {
        if(correctGuesses.includes(thisLetter)) {
            //count++
            return <Letter key={index} letter={thisLetter}/>
        } else {
            return <MissingLetter/>
        }       
    });

    useEffect(() => {
        

    }, [])
    
    const foundLetter = (e) => {
        e.preventDefault();
        const letterPressed = e.target.innerHTML.toLowerCase();
        console.log(letterPressed)
        if (myWord.split('').includes(letterPressed)) {
            setCorrectGuesses([...correctGuesses, letterPressed]);
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
            <Row>
                {displayWord}
            </Row>
            <Row>
                {displayAlphabet}
            </Row>
            <Row>
                <Col>
                    <HangImage source={require(`../images/state${incorrectCount + 1}.jpg`)}></HangImage>
                </Col>
            </Row>
            <br></br>
            <div>Incorrect count = {incorrectCount}</div>
        </>
    )
}

export default Word;