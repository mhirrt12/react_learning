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
                        <li key={index}>
                            {todo}
                        </li>
                    )
                })}
            </ul> } 
        </>
    )
}
export default TodoApp