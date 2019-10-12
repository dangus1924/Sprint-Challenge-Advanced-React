import React from 'react'
import { useDarkMode } from '../utils/DarkMode';
import soccer from '../img/soccer.png'

function NavBar() {
  const [darkMode, setDarkMode] = useDarkMode()

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Women's Soccer Players</h1>
      <img className="soccerBall" src={soccer} alt="soccer ball"/>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
    </nav>
  )
}
export default NavBar;