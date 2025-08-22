import { useState, useEffect } from "react"
import TodoInput from "./components/todoinput"
import TodoList from "./components/todolist"


function App() {

  const [todos, setTodos] = useState([]);
  const [todovalue, setTodovalue] = useState('');

  const persistData = (newdata) => {
    localStorage.setItem('todos', JSON.stringify({todos : newdata}));
  }

  const handleAddTodo = (newtodo) => {
    const newTodoList = [...todos, newtodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  const handleDeleteTodo  = (index) => {
    const newtodolist = todos.filter((arr, idx) => {
      return idx !== index
    })
    persistData(newtodolist);
    setTodos(newtodolist);
  }


  const handleEditTodo = (index) => {
    const valuetobeedited = todos[index];
    setTodovalue(valuetobeedited);
     persistData(valuetobeedited);
    handleDeleteTodo(index);
  }


  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos');
    if(!localTodos){
      return
    }

    console.log(localTodos);
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos);

  },[])
  
  return (
    <>
      <TodoInput todoValue={todovalue} setTodovalue={setTodovalue} handleAddTodo={handleAddTodo}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
