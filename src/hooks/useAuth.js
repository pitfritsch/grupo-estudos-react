export default function useAuth() {
  
  function entrar() {
    localStorage.setItem("logado", JSON.stringify(true))
    console.log("entrou")
  }
  
  function sair() {
    localStorage.setItem("logado", JSON.stringify(false))
    // localStorage.removeItem("logado")
    console.log('sair')
  }

  function estaLogado() {
    return !!JSON.parse(localStorage.getItem("logado"))
  }
  
  return {
    entrar, sair, estaLogado
  }
}