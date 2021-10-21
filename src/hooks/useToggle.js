import { useState } from "react";

export default function useToggle(valorInicial) {
  const [ checked, setChecked ] = useState(valorInicial)
  
  function alterar() {
    setChecked(oldstate => !oldstate)
  }

  return [ checked, alterar ]
}