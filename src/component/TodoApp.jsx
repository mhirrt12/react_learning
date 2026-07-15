import { useState } from 'react'
const TodoApp = () => {
    const [todos, setTodos] = useState([
        "Learn React",
        "Learn JSX",
    ]);

    return (
        <>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            {todo}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default TodoApp