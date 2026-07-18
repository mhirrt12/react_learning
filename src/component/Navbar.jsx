import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/student/1">Student 1</Link>

    <Link to="/student/2">Student 2</Link>

       <Link to="/student/3">Student 3</Link>
</nav>

    )
};
export default Navbar;