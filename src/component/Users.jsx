import { useState ,useEffect } from "react";

function Users() {
const [users, setUsers] = useState([]);
    
    useEffect(() => {
         fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => { setUsers(data) });
    }, []); 
       return (
        <>
               {users.map((user,index) => {
                   return (
        <><h1>{user.username}</h1>
         
         <h1>{user.email}</h1></>)
         })}


</>
    )
    

}
export default Users;