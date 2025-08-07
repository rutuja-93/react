
import First_component from './components/first_component'
import Test_component from './components/test_component' // Add this if needed
import './App.css'
import { useState } from 'react';

function App() {
 let [num, setNum]= useState(0);

 function handleClick(){
  console.log(num);
  setNum(num+1);
 }
 

  return (
    <>
      <div>
        <div className='container'>
          <div className='box'>
        <p>value of number is {num}</p>
        <button onClick={handleClick}>increse</button>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
