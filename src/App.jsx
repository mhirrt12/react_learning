
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
function App() {
 

  return (
    <> 
      <Navbar />
      <ShowHide />
       <ThemeToggle />
      <Login />
      <h1>Hello React!</h1>
      <Counter />
      <LikeButton />
        <StudentCard  />
         {/* <StudentCard name="sara"
             department="Software Engineering" />
          <StudentCard name="beti"
             department="Software Engineering"/> */}
      <Hero />
      <CourseCard
  courseName="React"
  instructor="John"
  duration="8 Weeks"
/>

<CourseCard
  courseName="JavaScript"
  instructor="Sara"
  duration="6 Weeks"
/>

<CourseCard
  courseName="Node.js"
  instructor="Mike"
  duration="10 Weeks"
/>
     <Footer />
    </>
  )
}

export default App
