import React from 'react'

export default function Lista({ todos, removeItem }) {
  return (
    <ul>
      {todos.map((todo, index) => 
        <li key={index}>
          {todo}
          <button onClick={() => removeItem(index)}>Excluir</button>
        </li>
      )}
    </ul>
  )
}
