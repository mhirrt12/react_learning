import { useState } from 'react'
const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
        <h1>{isLoggedIn?<h1>welcome 👋👋🥰to page</h1>:<h1>pls login first😣😒😒</h1>}</h1>
         <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>login</button>
        
        </>
    )
}
export default Login