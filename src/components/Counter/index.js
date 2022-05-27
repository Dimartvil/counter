import React from 'react';
import './Counter.css'

function Counter({ numClicks }){
  return (
    <div className= 'Counter'>
      {numClicks}
    </div>
  );
}


export {Counter};