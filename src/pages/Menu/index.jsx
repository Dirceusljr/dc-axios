import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Menu = () => {
  return (
    <main>
        <nav>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='conteudo'><li>Conteudo</li></Link>
            </ul>
        </nav>
        <Outlet />
    </main>
  )
}

export default Menu