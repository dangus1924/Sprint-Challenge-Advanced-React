import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <div className="App">      
      <PlayerList />
    </div>
    </>
  );
}

export default App;
