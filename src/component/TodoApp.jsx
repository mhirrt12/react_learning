import { useState } from 'react'
const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const addTodo = () => {
        if (input.trim() === "") return;

  setTodos([
    ...todos,
    input
  ]);

  setInput("");

    };
  
    const deleteTodo = (index1) => {
      
        {
            const updatedTodos = todos.filter((todo, index) => { return index !== index1 });
            setTodos(updatedTodos);
        }
        return (
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            {todo}
                             <button onClick={deleteTodo}>
  Delete
</button>
                        </li>
                    )
                })}
            </ul>
        )
}
    return (
        <>
            <input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>
  Add
            </button>
            
           {todos.length===0?<p> not todo list found</p>:<ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index} onClick={() => mark(index)}>
                            {todo}
                             <button onClick={() => deleteTodo(index)}>
  Delete
</button>
                        </li>
                    )
                })}
            </ul> } 
        </>
    )
}
export default TodoApp