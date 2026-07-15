import { useState } from 'react'
const TodoApp = () => {
    const [todos, setTodos] = useState([
       
    ]);

    return (
        <>
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