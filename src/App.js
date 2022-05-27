import './App.css';
import { Button } from './components/Button';
import { Counter } from './components/Counter'
import logo from './images/dimartvil-logo.png';
import {useState} from 'react';
function App() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className='App'>
      <div className ='logo-container'>
        <img
          className='logo'
          src = {logo}
          alt = 'Logo'
        />
      </div>
      <div className="main-container">
        <Counter
        numClicks= {count}
        />
        <Button
        text= 'Click'
        isClickButton={true}
        clickFunction= {clickHandler}
        ></Button>

        <Button
        text= 'Reset'
        isClickButton={false}
        clickFunction= {resetCounter}
        ></Button>

      </div>
    </div>
  );
}

export default App;
