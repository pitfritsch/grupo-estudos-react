import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/projetos'>Projetos</Link>
      <Link to='/sobre'>Sobre</Link>
      <a href="/sobre">sobre</a>  {/* recarrega */}
    </div>
  )
}
