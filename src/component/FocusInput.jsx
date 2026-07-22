import {useRef} from "react";

const FocusInput =()=>{
    const input = useRef(null);

 const focus=()=>{
    input.current.focus();
 }
 return (
    <>
       <input ref={input} type="text" placeholder="Enter your name" />  <br />
    <br />
      <button onClick={focus}>Focus Input</button>
    </>
 )
} 
export default FocusInput;