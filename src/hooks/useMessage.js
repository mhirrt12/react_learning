import { useState } from "react";
const useMessage = () => { 
    const [message, setMessage] = useState("Hello React!");
    const changeMessage = () => {
        setMessage("I love Custom Hooks!");
    }
    return {
        message,changeMessage
    }
}
export { useMessage };