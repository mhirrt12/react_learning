
import './App.css'
import Footer from './component/Footer'
import StudentCard from './component/StudentCard'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import CourseCard from './component/CourseCard'
import Counter from './component/Counter'
import LikeButton from './component/LikeButton'
import Login from './component/Login'
import ShowHide from './component/ShowHide'
import ThemeToggle from './component/ThemeToggle'
import TodoApp from './component/TodoApp'
import App2 from './component/App2'
import PageTitle from './component/PageTitle'
import Users from './component/Users'
import Posts from './component/Posts'
import CreatePost from './component/CreatePost'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import { Routes, Route } from 'react-router-dom'
import StudentDetails from './component/StudentDetails'
import LoginSuccess from './component/LoginSuccess'
function App() {
 

  return (
    <> 
      <Navbar />
        <LoginSuccess />
      <Routes >
      
        <Route path="/student/:id" element={<StudentDetails />} />
         <Route
        path="/"
        element={<Home />}
        />
          <Route
        path="/about"
        element={<About />}
        />
          <Route
        path="/contact"
        element={<Contact />}
    />
      </Routes>
      <CreatePost />
      <Posts />
       {/* <Users /> */}
      <PageTitle />
     
      
<App2 />
      <TodoApp />
      <Login />
      <ThemeToggle />
      <ShowHide />
      <LikeButton />
      <h1>Hello React!</h1>
      <Counter />
        <StudentCard />
         {/* <StudentCard name="sara"
             department="Software Engineering" />
          <StudentCard name="beti"
             department="Software Engineering"/> */}
      <Hero />
      <CourseCard />

{/* <CourseCard
  courseName="JavaScript"
  instructor="Sara"
  duration="6 Weeks"
/>

<CourseCard
  courseName="Node.js"
  instructor="Mike"
  duration="10 Weeks"
/> */}
     <Footer />
    </>
  )
}

export default App
