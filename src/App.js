import './App.css';
import {useState} from 'react';

function App() {
  const[num,setNum]=useState(0);

  function increment(){
    setNum(num+1);

  }
  function decrement(){
    setNum(num-1);
  }

  return (
    <>
    <h1>
    {num}
    </h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
