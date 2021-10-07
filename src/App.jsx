import './App.css';
import TodoList from './components/functional/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ backgroundColor: 'salmon', padding: '20px' }}>
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
