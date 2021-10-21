import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import useAuth from './hooks/useAuth';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';

function App() {
  const { estaLogado } = useAuth()

  return (
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
  );
}

export default App;
