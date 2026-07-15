import { useState } from 'react'

const ShowHide =()=>{
    const [showPassword, setShowPassword] = useState(false);
     return (
         <>
         <input type={showPassword ? "text" : "password"} placeholder="Enter your password" />
         <button onClick={()=>setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button>
         
         </>
     )
}
export default ShowHide