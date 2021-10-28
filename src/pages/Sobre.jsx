import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import { ThemeContext } from '../App'
import Navbar from '../components/functional/Navbar'
import RelogioFunctional from '../components/functional/RelogioFunctional'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function Sobre() {
  const params = useQuery()
  const { isDarkTheme } = useContext(ThemeContext)

  console.log(params.get("nome"))

  return (
    <div style={{
      background: isDarkTheme ? 'black' : 'white',
      color: isDarkTheme ? 'white' : 'black'
    }}>
      <Navbar />
      sobre
      <RelogioFunctional />
    </div>
  )
}
