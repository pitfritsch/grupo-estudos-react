import { Alert, Container, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'

interface IParams {
  idMarca: string
}

interface IRetorno {
  anos: {
    nome: string
    codigo: string
  }[]
  modelos: IModelo[]
}

interface IModelo {
  nome: string
  codigo: number
}

export default function Veiculos() {
  const { idMarca } = useParams<IParams>()

  const [ modelos, setModelos ] = useState<IModelo[]>([])
  const [ carregando, setCarregando ] = useState<boolean>(true)
  const [ erro, setErro ] = useState<string>('')

  const buscaVeiculos = useCallback(async (marca: string) => {
    setCarregando(true)
    try {
      const { data } = await axios.get<IRetorno>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos`)
      setModelos(data.modelos)
    } catch (error) {
      setErro('Não foi possivel buscar')
      console.error(error)
    } finally {
      setCarregando(false)
    }
  }, [])

  useEffect(() => {
    buscaVeiculos(idMarca)
  }, [idMarca, buscaVeiculos])  

  return (
    <Container maxWidth='sm'>

      {carregando && 'Carregando'}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Modelo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {modelos.map(modelo => 
              <TableRow key={modelo.codigo}>
                <TableCell>
                  {modelo.nome}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar
        open={!!erro}
        onClose={() => setErro('')}
        autoHideDuration={5000}
      >
        <Alert severity='error'>
          {erro}
        </Alert>
      </Snackbar>

    </Container>
  )
}
