import { useMessage } from "../hooks/useMessage"
const MessageButton = () => {
    const { message, changeMessage } = useMessage();
    return (
        <>
            <button onClick={changeMessage}>change the message</button>
            <h1>{message}</h1>
        </>
    )
}
 export default MessageButton