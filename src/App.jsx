import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';

function App() {
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
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
