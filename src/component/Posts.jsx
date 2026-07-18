import {useState, useEffect} from "react";

const Posts=()=>{
 
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
           
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                if (!response.ok) {
                    throw new Error("i cant fatch the data");
                }
                return response.json();
            })
            .then((data) =>{
                setPosts(data);
                     setLoading(false);})
            .catch ((error)=>{
                setError({ error});
                setLoading(false);
            })
      

    },[])

        if (loading) {
            return <h1>loading user data.....</h1>
        }
        if (error) {
            return <h1>Error:{error.message}</h1>
        }

    return (
        <div>{posts.slice(0,10).map((post) => (
           <div key={post.id}>
                <h1>{post.title}</h1><hr/>
                
            </div>
        ))}</div>
)
}
export default Posts;