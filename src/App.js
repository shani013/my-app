import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import TextArea from './components/TextArea';
import About from './components/About';
import NotFound from './components/NotFound';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  //using state variable i have set light mode and then cahange it using function
  const [mode, setMode] = useState('light');
  const modeChange = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='grey';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor='#ffffff';

    }
  }
  return (
      <Router>
          <Navbar name='Monkey King' mode={mode} modeChange={modeChange} />
          <Routes>
            <Route path="/" element={<TextArea heading='Enter Text to Analyze' mode={mode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
