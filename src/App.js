import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form';
import Todo from './components/todos/Todos';


function App() {
  return (
    <div className="App">
      <Form/>
      <Todo />
    </div>
  );
}

export default App;
