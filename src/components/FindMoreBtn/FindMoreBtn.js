import React, { useState, useEffect } from 'react';

function FindMoreBtn(props) {

    return (
        <div className='more-loader'>
            {!props.isProfile && <button className='more-loader__btn' type='button'>Ещё</button>}
        </div>
    );
}

export default FindMoreBtn;