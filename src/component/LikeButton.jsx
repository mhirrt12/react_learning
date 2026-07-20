
import useCounter from "../hooks/useCounter";

const LikeButton = () => {
    const { count, increase, decrease, reset } = useCounter();

    return (
        <>
            <h1>Like🩷: {count}</h1>
             <button onClick={increase}>Like👍</button>
             <button onClick={reset}>Reset</button>
       </>
    )
}
export default LikeButton
