import React from 'react'
import { ICliente } from '../../pages/Clientes'

interface IProps {
  cliente: ICliente
}

export default function Cliente({ cliente }: IProps) {
  return (
    <div style={{ margin: '10px', padding: '10px', backgroundColor: 'lightgray' }}>
      <h1>{cliente.nome}</h1>
      <h2>{cliente.idade}</h2>

      {cliente.endereco &&
        <div>
          <h1>Endereço</h1>
          <h4>Rua: {cliente.endereco.rua}</h4>
        </div>
      }

    </div>
  )
}
