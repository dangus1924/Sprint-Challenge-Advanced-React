import React from 'react';
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
