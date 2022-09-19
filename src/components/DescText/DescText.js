import React from 'react';

function DescText(props) {

    return (
        <h1 className='desc-text' style={props.style}>{props.text}</h1>
    );
}

export default DescText;
