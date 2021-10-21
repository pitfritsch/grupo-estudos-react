import React from 'react'
import useToggle from '../../hooks/useToggle'

export default function Checkbox() {
  const [ isChecked, toggleCheck ] = useToggle(true)

  return (
    <input type='checkbox' checked={isChecked} onChange={toggleCheck} />
  )
}
