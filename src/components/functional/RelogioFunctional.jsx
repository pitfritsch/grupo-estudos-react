import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../App"

export default function RelogioFunctional() {

  const { isDarkTheme } = useContext(ThemeContext)

  const [ data, setData ] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setData(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <h1 style={{
      color: isDarkTheme ? "cyan" : 'lightgreen'
    }}>{data.toLocaleTimeString()}</h1>
  )
}