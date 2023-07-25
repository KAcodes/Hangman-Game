import "./App.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import findWord from "./components/dictionary";
import { showButtons, disableButtons, enableButtons } from "./components/toggleKeyboard";

function App() {
  //create states of word, number of correct and incorrect guesses to zero, and creates an array for the right letters to be stored into
  const [myWord, setMyWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [gameOutcome, setGameOutcome] = useState(null);
  let correctCount = 0;

  //use effect sets word to random word generated from imported function
  useEffect(() => {
    setMyWord(findWord);
  }, []);

  //map each letter within word to an underscore, if letter is guessed correctly and in correct letters array, then the underscore is  replaced with this letter
  //correct count is increased for each correct letter
  const displayWord = myWord.split("").map((thisLetter, index) => {
    if (correctLetters.includes(thisLetter)) {
      correctCount++;
      return (
        <Col key={index}>
          <h3>{thisLetter}</h3>
        </Col>
      );
    } else {
      return (
        <Col key={index}>
          <h3>_</h3>
        </Col>
      );
    }
  });

  //when letter is guessed, if right then add to correct letters array, after each press make that button disappear
  const guessLetter = (e) => {
    e.preventDefault();
    const letterPressed = e.target.innerHTML.toLowerCase();
    if (myWord.split("").includes(letterPressed)) {
      setCorrectLetters([...correctLetters, letterPressed]);
      e.target.style.visibility = "hidden";
    } else {
      e.target.style.visibility = "hidden";
      setIncorrectCount(incorrectCount + 1);
    }
  };

  //every letter in alphabet is mapped into a button which is displayed as an onscreen keyboard
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "-",
  ];
  const displayAlphabet = alphabet.map((letter, index) => (
    <Col xs="2" key={index}>
      <Button
        type="button"
        className="alphabetBtn m-1 btn-light"
        onClick={guessLetter}
        key={index}
      >
        {letter}
      </Button>
    </Col>
  ));

  //if restart is clicked then states are all set back to their original states
  const restart = () => {
    setCorrectLetters([]);
    setIncorrectCount(0);
    setMyWord(findWord);
    showButtons();
    setGameOutcome(null)
    enableButtons();
  };

  //if user wins or loses empty jsx tag then states the outcome on page
  useEffect(() => {
    if (incorrectCount === 10) {
      setGameOutcome("lost");
      disableButtons();
    }
    if (correctCount === displayWord.length && correctCount !== 0) {
      setGameOutcome("won");
      disableButtons();
    }
  }, [incorrectCount, correctCount, displayWord.length])
  

  return (
    <Container fluid>
      <Row>
        <Col className="m-1">
          <Button variant="warning" onClick={restart}>
            Restart
          </Button>
        </Col>
        <h1 className="text-center">HANGMAN</h1>
      </Row>
      <Row className="text-center my-4">{displayWord}</Row>
      <Row className="text-center">{displayAlphabet}</Row>
      <Row className="text-center my-2">
        <Col md={9}>
          <img
            src={require(`./images/state${incorrectCount + 1}.jpg`)}
            alt="hangman"
          />
          {/* {(incorrectCount === 10) && <><h3>HUNG!</h3><h5>Oh no you have lost! The correct word was '{myWord}'. To try again please click on the restart button.</h5></>}
                  {correctCount && correctCount === displayWord.length && <><h3>You Win!</h3><h5>Well done you correctly guessed the word! To play again click on the restart button.</h5></>} */}
          {gameOutcome &&
            (gameOutcome === "won" ? (
              <div className="my-2">
                <h3 className="text-success">You Win!</h3>
                <h5>
                  Well done you correctly guessed the word! To play again click
                  on the restart button.
                </h5>
              </div>
            ) : (
              <div className="my-2">
                <h3 className="text-danger">HUNG!</h3>
                <h5>
                  Oh no you have lost! The hidden word was '{myWord}'. To try
                  again please click on the restart button.
                </h5>
              </div>
            ))}
        </Col>
        <Col className="m-2 p-3 border rounded">
          <h2>Instructions</h2>
          <p>
            The aim of the game is simple: pick from the letters on the screen
            to try and guess the hidden word represented by the underscores. If
            the letter chosen is correct and in the hidden word then the letter
            will reveal its position. If the letter is incorrect then a line
            will be shown, which gradually progresses with each further
            incorrect guess, until a full image of a man being hung is revealed.
            If you manage to guess the word before the full image is shown, you
            win! However if you see the full "hangman" you have lost and must
            restart the game. Click on the dropdown to navigate to the game
            page. Enjoy!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
