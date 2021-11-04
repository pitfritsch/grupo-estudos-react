import React from 'react'
import Cliente from '../components/functional/Cliente'
import Navbar from '../components/functional/Navbar'

interface IEndereco {
  rua: string
}

type TSexos = 'masculino' | 'feminino'

export interface ICliente {
  nome: string
  idade: number
  sexo: TSexos
  endereco?: IEndereco
}

// const clientes: Array<ICliente> = [
const clientes: ICliente[] = [
  { 
    nome: 'pedro',
    idade: 23,
    sexo: 'masculino'
  },
  { 
    nome: 'daniel',
    idade: 23,
    sexo: 'masculino'
  },
  { 
    nome: 'paulo',
    idade: 25,
    sexo: 'masculino',
    endereco: {
      rua: 'rua A'
    }
  },
]

export default function Clientes() {
  return (
    <div>
      <Navbar />
      {clientes.map(cliente => 
        <Cliente cliente={cliente} />
      )}
    </div>
  )
}
