import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import CardContainer from './components/CardContainer';

const App = () => {


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardContainer />
    </div>
  );
}

export default App;
