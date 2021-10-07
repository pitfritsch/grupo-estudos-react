import React, { useState } from 'react'
import Lista from './Lista'

export default function TodoList() {

  const [ descricao, setDescricao ] = useState('')
  const [ todos, setTodos ] = useState([])

  function handleChange(event) {
    setDescricao(event.target.value)
  }

  function handleSave() {
    setTodos(oldState => [ ...oldState, descricao ])
    setDescricao('')
  }

  function removeItem (index) {
    setTodos(oldState => {
      const novo = [ ...oldState ]
      novo.splice(index, 1)
      return novo
    })
  }

  return (
    <div>
      <input type="text" value={descricao} onChange={(event) => handleChange(event)} />
      <button onClick={handleSave}>Salvar</button>
      <Lista todos={todos} removeItem={removeItem} />
    </div>
  )
}
