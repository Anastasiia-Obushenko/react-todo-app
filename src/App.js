import './App.css';
import { useState } from 'react';
// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setinputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form setinputText={setinputText} />
      <TodoList />
    </div>
  );
}

export default App;
