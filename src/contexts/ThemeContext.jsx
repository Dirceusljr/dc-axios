import React, { createContext, useState } from 'react'

const ThemeContext = createContext();
ThemeContext.displayName = 'Contexto';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState({
        background: 'white',
        text: 'black',
    });

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme.background === 'white' 
            ? {background: 'black', text: 'white'}
            : {background: 'white', text: 'black'}
            );
    }


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider, ThemeContext}