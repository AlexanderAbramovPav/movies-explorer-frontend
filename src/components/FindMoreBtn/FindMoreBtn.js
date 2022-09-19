import React from 'react';

function FindMoreBtn(props) {

    const handleMoreClick = () => {
        props.onMore();
    }

    return (
        <div className='more-loader'>
            <button className='more-loader__btn' type='button' onClick={handleMoreClick}>Ещё</button>
        </div>
    );
}

export default FindMoreBtn;