import { createContext, useContext, useState } from 'react'
import './App.css' 

// Step 1: Context banaya
const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-10">
      {/* Step 2: Provider se wrap kiya */}
      <CounterContext.Provider value={[count, setCount]}>
        <Component1 />
        <Component2 />
      </CounterContext.Provider>
    </div>
  );
}

function Component1() {
  // Step 3: Context se value le li
  const [count, setCount] = useContext(CounterContext);

  return (
    <div className='bg-amber-300 p-8 mb-8'>
      <button 
        className='border px-4 py-2 mt-3'
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <br />
      <button 
        className='border px-4 py-2 mt-3'
        onClick={() => setCount(0)}
        >
        Reset
      </button>
    </div>
  );
}

function Component2() {
  // Step 3: Dusre component me bhi context use
  const [count] = useContext(CounterContext);

  return (
    <div className='bg-sky-400 p-8 mb-9'>
      <h1>Counter is {count}</h1>
    </div>
  );
}

export default App;
