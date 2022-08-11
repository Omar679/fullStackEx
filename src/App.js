import React from "react";
import {useState} from 'react'


const  App =() => {

  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);


  return (
    <div >
      {counter}
      <button onClick={ increaseByOne }>
        +
      </button>
      <br />
      <button onClick={setToZero}>
        Reset
      </button>

    </div>
  );
}

export default App;
