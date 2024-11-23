import './App.css';
import Navbar from './components/Navbar';
import About from './components/about';

import TextArea from './components/TextArea';
import React, { useState } from 'react';


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
      <Navbar name='Monkey King' mode={mode} modeChange={modeChange} />
      <TextArea heading='Enter Text to Analyze' mode={mode} />
      <About/>
    </>
  );
}

export default App;
