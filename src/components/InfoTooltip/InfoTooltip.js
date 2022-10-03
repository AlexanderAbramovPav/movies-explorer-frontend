import React from 'react';
import CloseBtn from '../../images/vector-close.svg';

function InfoTooltip(props) {

    return (
      <div className={props.isOpen ? `popup popup_opened` : `popup`} onClick={props.onOutClick}>
        <div className="popup__container">
            {props.children}
            <button className="popup__close-btn" type="button" aria-label="Закрыть попап" onClick={props.onClose}><img className="popup__close-icon" src={CloseBtn} alt='Иконка закрытия попапа'/></button>
        </div>
      </div>
    );
  }
  
  export default InfoTooltip;