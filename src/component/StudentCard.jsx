const StudentCard = () => {
    const students = [
    {
      id: 1,
      name: "Kalkidan",
      department: "Software Engineering",
    },
    {
      id: 2,
      name: "Sara",
      department: "Computer Science",
    },
    {
      id: 3,
      name: "Abel",
      department: "Information Systems",
    },
  ];
    return (
        <>{students.map((student) => {
            return (
                <div key ={student.id}>
                    <h1>{student.name}</h1>
                    <h2>{student.department}</h2>
                </div>
            )
        })} 
       </>

    );
};
export default StudentCard ;