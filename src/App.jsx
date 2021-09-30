import './App.css';
import Checkbox from './components/functional/Checkbox';
import Functional from './components/functional/Functional';
import RelogioFunctional from './components/functional/RelogioFunctional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ backgroundColor: 'salmon', padding: '20px' }}>
          <Functional />
          <RelogioFunctional />
          <Checkbox />
        </div>
      </header>
    </div>
  );
}

export default App;
