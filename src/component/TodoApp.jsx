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


    // const mark = (index1) => {
    //     const updatedTodos = todos.map((todo, index) => {
    //         if (index === index1) {
    //             return todo + " ✅";
    //         }
    //         return todo;
    //     });
    //     setTodos(updatedTodos);
        
    // }
  const editTodo = (index1) => {
        const newTodo = prompt("Edit the todo:", todos[index1]);
        if (newTodo !== null && newTodo.trim() !== "") {
            const updatedTodos = todos.map((todo, index) => {   
                if (index === index1) {
                    return newTodo;
                }
                return todo;
            });
            setTodos(updatedTodos);
        }
    };

    const deleteTodo = (index1) => {
            const updatedTodos = todos.filter((todo, index) => { return index !== index1 });
            setTodos(updatedTodos);
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
                        <li key={index} >
                            {todo}
<button onClick={() => deleteTodo(index)}>
  Delete
</button>
 <button onClick={() => editTodo(index)}>
  Edit
</button>
                        </li>
                    )
                })}
            </ul> } 
        </>
    )
}
export default TodoApp