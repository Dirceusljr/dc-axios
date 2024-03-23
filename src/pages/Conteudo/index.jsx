import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import axios from 'axios';

const Conteudo = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    const fetchDigimons = async () => {
      const response = await axios.get('https://digimon-api.vercel.app/api/digimon');
      setDigimons(response.data)
    }

    fetchDigimons();
  },[])

  return (
    <div style={{backgroundColor: theme.background, color: theme.text}}>
      <h2>Listagem de Digimons</h2>
      <input type="checkbox" onChange={toggleTheme} />

      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {digimons.map((item) => (
          <div key={item.name}style={{width: '200px', margin: '10px'}}>
            <img src={item.img} alt={item.name} style={{width: '100%'}}/>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Conteudo