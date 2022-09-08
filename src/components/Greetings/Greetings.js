import React, { useState, useEffect } from 'react';

function Greetings(props) {

    return (
        <h2 className='greetings'>{props.text}</h2>
    );
}

export default Greetings;
