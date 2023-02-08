import React from 'react';
import {Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Letter = (props) => {

    //props.addCount(props.count + 1)
    
    return (
        <>
            <Col>
            <h3>{props.letter}</h3>
            </Col>
        </>
    )
}

export default Letter;