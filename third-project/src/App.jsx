// App.jsx
import './App.css';
import Sports from './components/sports'; // Uppercase import
import Welcome from './components/welcome';
import FirstComponenets from './components/FirstComponenets';
import Todos from './components/todos';

function App() {
  return (
    <div>
      {/* <FirstComponenets/>
      <Welcome />
      <Sports /> */}
      <Todos />

    </div>
  );
}

export default App;
