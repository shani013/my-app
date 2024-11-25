import './App.css';
import Navbar from './components/Navbar';
import About from './components/about';
import TextArea from './components/TextArea';
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
    <>
      <Router>
          <Navbar name='Monkey King' mode={mode} modeChange={modeChange} />
            <Routes>
                {/* All children must be Route elements */}
                <Route path="/" element={<TextArea heading='Enter Text to Analyze' mode={mode} />} />
                <Route path="/about" element={<About/>} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
