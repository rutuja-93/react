// App.jsx
import './App.css';
import Sports from './components/sports'; // Uppercase import
import Welcome from './components/welcome';
import FirstComponenets from './components/FirstComponenets';

function App() {
  return (
    <div>
      <FirstComponenets/>
      <Welcome />
      <Sports />

    </div>
  );
}

export default App;
