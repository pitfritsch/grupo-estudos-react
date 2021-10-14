import React from 'react'
import { useHistory } from 'react-router'
import Navbar from '../components/functional/Navbar'

export default function HomePage() {
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
    </div>
  )
}
