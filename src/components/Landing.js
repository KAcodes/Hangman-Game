import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Navbar from './Navbar';

function Landing() {
    return (<Container>
                <Row className="text-center m-3">
                    <Col>
                    <h2>Welcome to my Hangman game</h2>
                    <p>The aim of the game is simple: pick from the letters on the screen to try and guess the hidden word represented by the underscores. If the letter chosen is correct and in the hidden word then the letter will reveal its position. If the letter is incorrect then a line will be shown, which gradually progresses with each further incorrect guess, until a full image of a man being hung is revealed. If you manage to guess the word before the full image is shown, you win! However if you see the full "hangman" you have lost and must restart the game. Click on the dropdown to navigate to the game page. Enjoy!</p>
                
                
                    </Col>
                    <Col>
                        <Navbar/>
                    </Col>
                </Row>
             </Container>)
};


export default Landing;