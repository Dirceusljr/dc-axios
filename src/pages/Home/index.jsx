import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';


const Home = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div style={{backgroundColor: theme.background, color: theme.text}}>
      <button onClick={toggleTheme}>Dark Mode</button>
      <h1>Bem-vindo à API do Digimon</h1>

      <label>
        <input type='checkbox' onChange={toggleTheme} />
      </label>
    </div>
  )
}

export default Home