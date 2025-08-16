import { useRef } from 'react'
import './App.css'

function App() {

  return (
    <>
<h1>Hiii There</h1>
<Input/>
<br />
<Input/>
    </>
  )
}



function Input(){
  const inputRef= useRef(null);

  function focusInput(){
    const inputBox = inputRef.current;
    inputBox.focus();
  }

return (
  <div className="input-wrapper">
    <input type="text" ref={inputRef} placeholder='Enter Something'/>
<button onClick={focusInput}> Focus</button>
  </div>
);
}
export default App
