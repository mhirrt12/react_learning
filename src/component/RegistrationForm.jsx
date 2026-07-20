import {useState} from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();  
        console.log(formData);
        setFormData({
            name: "",
            email: "",
            department: ""
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
                <input type="text" value={formData.name} placeholder="pls enter your name " onChange={(e) => setFormData({ ...formData, name: e.target.value })}></input><br /><br />

                <input type="email" value={formData.email} placeholder="pls enter your email " onChange={(e) => setFormData({ ...formData, email: e.target.value })}></input> <br /><br />

                <input type="text" value={formData.department} placeholder="pls enter your department " onChange={(e) => setFormData({ ...formData, department: e.target.value })}></input> <br /><br /> 
            <button >submit</button> 

        </form>
        
        </>
    )

}
export {RegistrationForm};