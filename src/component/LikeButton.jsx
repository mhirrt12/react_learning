import { useState } from 'react'



const LikeButton = () => {
    const [like, setLike] = useState(0)
    return (
        <>
            <h1>Like🩷: {like}</h1>
             <button onClick={() => setLike(like + 1)}>Like👍</button>
             <button onClick={() => setLike(0)}>Reset</button>
       </>
    )
}
export default LikeButton
