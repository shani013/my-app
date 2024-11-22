import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';


function App() {
  //using state variable i have set light mode and then cahange it using function
  const [mode, setMode] = useState('light');
  const modeChange = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  }
  return (
    <>
      <Navbar name='Monkey King' mode={mode} modeChange={modeChange} />
      <TextArea heading='Enter Text to Analyze '/>
    </>
  );
}

export default App;
