import { useParams } from "react-router-dom";

const StudentDetails = () => { 
    const { id } = useParams();
    return (
        <>
            <h1>Student Details</h1>
            <h1>Student ID: {id}</h1>
        </>
    )
}
export default StudentDetails;