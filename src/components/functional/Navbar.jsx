import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../App'

export default function Navbar() {

  const { isDarkTheme, toggleDarkTheme } = useContext(ThemeContext)

  useEffect(() => {
    console.log({ isDarkTheme })
  }, [isDarkTheme])

  return (
    <div>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/projetos'>Projetos</Link>
      <br />
      <Link to='/sobre'>Sobre</Link>
      <br />
      <Link to='/dashboard'>Dashboard</Link>
      <br />
      <a href="/sobre">sobre</a>  {/* recarrega */}
      <br />
      <label htmlFor="darkTheme">modo escuro?</label>
      <input
        type="checkbox"
        name="darkTheme"
        id="darkTheme"
        checked={isDarkTheme}
        onChange={toggleDarkTheme}
      />
      <br />
    </div>
  )
}
