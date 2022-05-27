import React from 'react';
import './Button.css'

function Button({text, isClickButton, clickFunction}) {
  return (
    <button
      className= {isClickButton ? 'click-button' :'reset-button'}
      onClick={clickFunction}
      type= 'button'
    >
      {text}
    </button>
  );
}


export {Button};