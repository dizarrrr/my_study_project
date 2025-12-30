import React, {useState} from 'react'
import './index.scss';

const App = () => {
  const [counter, setCounter] = useState(0)

  const plus = (e) => {
    setCounter(counter + 1)
  }

  const minus = (e) => {
    setCounter(counter - 1)
  }

  
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button className="minus" onClick={minus}>- Минус</button>
        <button className="plus" onClick={plus}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
