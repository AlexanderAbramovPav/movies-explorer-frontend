import React, { useState, useEffect } from 'react';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function PopupInfo(props) {

    useEffect(() => {
        props.isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll' 
      }, [props.isOpen]);

    return (
        <InfoTooltip onClose={""} isOpen={props.isOpen} onOutClick={""}>
            <img className="popup-info__icon" src={props.selectedTooltip?.icon} alt='Иконка попапа'/>
            <h2 className="popup-info__title">{props.selectedTooltip?.tipTitle}</h2>
        </InfoTooltip>
    );
  }
  
  export default PopupInfo;