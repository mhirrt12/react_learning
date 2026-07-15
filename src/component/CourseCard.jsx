const CourseCard = () => {
    const courses = [
  {
    id: 1,
    name: "React",
    duration: "8 Weeks",
  },
  {
    id: 2,
    name: "JavaScript",
    duration: "6 Weeks",
  },
  {
    id: 3,
    name: "Node.js",
    duration: "10 Weeks",
  },
];
    return (<>
       {courses.map((course) => {
            return (
                <div key ={course.id}>
                    <h1>{course.name}</h1>
                    <h2>{course.duration}</h2>
                </div>
            )
        })}  
    
</>
    );
};
export default CourseCard ;