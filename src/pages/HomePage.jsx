import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { ThemeContext } from '../App'
import Navbar from '../components/functional/Navbar'
import useAuth from '../hooks/useAuth'

export default function HomePage() {
  const { entrar, sair } = useAuth()
  const history = useHistory()

  const { isDarkTheme } = useContext(ThemeContext)

  function login() {
    //código de login
    history.push('/projetos/20', {
      id: 100
    })
  }

  return (
    <div style={{
      background: isDarkTheme ? 'black' : 'white',
      color: isDarkTheme ? 'white' : 'black'
    }}>
      <Navbar />
      <button onClick={login}>Login</button>
      <br />
      <button onClick={entrar}>Entrar</button>
      <button onClick={sair}>Sair</button>
      <br />
      <br />
      <h1>Texto teste</h1>
    </div>
  )
}
