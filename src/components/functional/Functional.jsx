import React, { useCallback, useEffect, useState } from 'react'

export default function Functional() {

  const [ cliques, setCliques ] = useState(0)

  // function handleClick() {
  //   setCliques(oldState => oldState + 1)
  // }

  const handleClick = useCallback(() => {
    setCliques(oldState => oldState + 1)
  }, [])

  useEffect(() => {
    console.log('renderizou')
  }, [handleClick])

  return (
    <div>
      <h1 onClick={handleClick}>{cliques}</h1>
    </div>
  )
}
