import { createContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import useAuth from './hooks/useAuth';
import useToggle from './hooks/useToggle';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';

export const ThemeContext = createContext({
  teste: 'oi'
})

function App() {
  const { estaLogado } = useAuth()

  const [ isDarkTheme, toggleDarkTheme ] = useToggle(false)

  return (
    <ThemeContext.Provider value={{ toggleDarkTheme }} teste={true} isDarkTheme={isDarkTheme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact >
            <HomePage />
          </Route>
          <Route path="/projetos/:idProjeto" component={Projetos} />
          <Route path='/sobre'>
            <Sobre />
          </Route>
          <Route path="/dashboard" render={(props) => {
              if (estaLogado()) {
                return <Dashboard {...props} />
              } else {
                console.log("Não está logado, redirecionando")
                return <Redirect to="/" />
              }
            }}
          />
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
