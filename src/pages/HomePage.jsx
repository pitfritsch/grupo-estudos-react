import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { ThemeContext } from '../App'
import Navbar from '../components/functional/Navbar'
import useAuth from '../hooks/useAuth'
import { Button } from '@mui/material';
import { withStyles } from '@mui/styles'

const BotaoCustomizado = withStyles({
  root: {
    backgroundColor: 'purple'
  }
})(props => <Button {...props} />)

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
      <Button variant='contained' color='error' onClick={login}>Login</Button>
      <br />
      <Button variant='outlined' onClick={entrar}>Entrar</Button>
      <BotaoCustomizado onClick={sair}>Sair</BotaoCustomizado>
      <br />
      <br />
      <h1>Texto teste</h1>
    </div>
  )
}
