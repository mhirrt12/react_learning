import { useState, useEffect } from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    // useEffect(() => {
    
    //     fetch("https://jsonplaceholder.typicode.com/posts", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //              title,
    //              body,
    //             userId: 2
    //         })
    //     })

    //         .then(response => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             alert("Post Created!");
    //             setTitle("");
    // setBody("");
    //         })


    // }, [Submit]);
    

    const post = () => {
        if (title === "" || body === "") {
            alert("Please fill in both title and body");
            return;
        }
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        })

            .then(response => response.json())
            .then((data) => {
                console.log(data);
                alert("Post Created!");
                setTitle("");
                setBody("");
            })
    }

    return (
        <>
            <input placeholder='enter your title'  value={title} onChange={(e) => setTitle(e.target.value)}></input><br />
            <input placeholder='enter your body' name="body" value={body} onChange={(e) => setBody(e.target.value)}></input><br />
            <button onClick={() => post()} name="Submit">Submit</button>
        
        </>
)


}
export default CreatePost;