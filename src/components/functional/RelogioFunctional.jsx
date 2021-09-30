import { useEffect, useState } from "react"

export default function RelogioFunctional() {

  const [ data, setData ] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setData(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <h1>{data.toLocaleTimeString()}</h1>
  )
}