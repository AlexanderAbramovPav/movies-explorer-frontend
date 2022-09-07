import React, { useState, useEffect } from 'react';

function SectionTitle(props) {

    return (
        <h1 className='section-title'>{props.text}</h1>
    );
}

export default SectionTitle;
