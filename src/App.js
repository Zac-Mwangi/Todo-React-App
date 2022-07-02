import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form';
import Todos from './components/todos/Todos';


function App() {

  // array
  let todos = ["Read a book", "Go jogging", "Sleep"]
  return (
    <div className="App">
      <Form/>
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
