// import {useState} from 'react'

// const Counter = () => {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   )
// }

// export default Counterimport { useState, useEffect } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("Rendered!");

    });

    return (

        <>
            <h1>{count}</h1>

            <button
                onClick={() => setCount(count + 1)}
            >
                +
            </button>
        </>

    );

}
