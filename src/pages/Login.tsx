import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import useAuth from '../hooks/useAuth'
import { useHistory } from 'react-router'

export default function Login() {
  const { entrar } = useAuth()
  const history = useHistory()

  function login() {
    entrar()
    history.push("/dashboard")
  }

  return (
    <Container fixed maxWidth='sm'>
      <Stack marginTop='50px' sx={{ gap: '50px' }} >
        <TextField
          label="Login"
          variant="standard"
        />
        <TextField
          label="Senha"
          variant="standard"
          type='password'
        />
        <Button
          variant='contained'
          color='info'
          onClick={login}
        >
          Login
        </Button>
      </Stack>
    </Container>
  )
}
