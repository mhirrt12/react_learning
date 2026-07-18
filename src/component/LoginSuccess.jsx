import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {
    const navigate = useNavigate();
    const login = () => {
        alert("Login Successful!");
        navigate("/about");
    }
    return (
        <>
            <button onClick={login}>Login</button>
        </>
    )
}
export default LoginSuccess;