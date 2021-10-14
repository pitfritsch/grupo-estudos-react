import React from 'react'
import { useLocation } from 'react-router'
import Navbar from '../components/functional/Navbar'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function Sobre() {
  const params = useQuery()

  console.log(params.get("nome"))

  return (
    <div>
      <Navbar />
      sobre
    </div>
  )
}
