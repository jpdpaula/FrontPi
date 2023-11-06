import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Cards from './components/cards/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Cards/>
    </div>
  );
}

export default App;
