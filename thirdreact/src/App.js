import {useState} from 'react';
import './App.css';


function App() {

  const [number, setNumber] = useState(0)

  const onIncrease = () => {
    setNumber(number + 1)
    console.log('temp')
  } 

  const onDescrease = () => {
    setNumber(number - 1)
  }

  return (
    <div>
      <h1>{number}</h1>      
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDescrease}>-1</button>
      
    </div>
  );
}

export default App;
