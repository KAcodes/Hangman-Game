import React from 'react';
import {Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//component returns a letter
const Letter = (props) => {
    return (
            <Col><h3>{props.letter}</h3></Col>
    )
}

export default Letter;