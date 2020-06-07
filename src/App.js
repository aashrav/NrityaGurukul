import React from 'react';
import './App.css';
import Home from  './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <LogIn/>
    </BrowserRouter>
  );
}

export default App;
