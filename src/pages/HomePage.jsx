import React from 'react'
import { useHistory } from 'react-router'
import Navbar from '../components/functional/Navbar'
import useAuth from '../hooks/useAuth'

export default function HomePage() {
  const { entrar, sair } = useAuth()
  const history = useHistory()

  function login() {
    //código de login
    history.push('/projetos/20', {
      id: 100
    })
  }

  return (
    <div>
      <Navbar />
      <button onClick={login}>Login</button>
      <br />
      <button onClick={entrar}>Entrar</button>
      <button onClick={sair}>Sair</button>
    </div>
  )
}
