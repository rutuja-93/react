import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from "./components/NotFound"; // ✅ Import this
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* ✅ Fallback for invalid routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
