import { useState, useEffect } from 'react';
import './App.css';
import OnUpdate from './OnUpdate';

function App() {
  const [isVisible, setVisible] = useState(true);

  return (
    <div>
      {/* <OnUpdate/> */}
      <h2>I am app component</h2>
      <button onClick={() => setVisible(!isVisible)}>Toggle Visibility</button>
      {isVisible && <TestComponent />}
    </div>
  );
}

function TestComponent() {
  useEffect(() => {
    console.log("Hiii"); // Runs when mounted

    return () => {
      console.log("Hello There"); // Runs when unmounted
    };
  }, []);

  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "50px" }}>
      <p>I am test component</p>
    </div>
  );
}

export default App;
