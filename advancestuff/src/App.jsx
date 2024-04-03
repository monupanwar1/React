import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import User from "./components/User"

const App = () => {
  return (
    <div>

      <nav className="flex items-center bg-blue-500 rounded justify-center gap-10">
     <Link to="/Home">Home</Link>
     <Link to="/User">USER</Link>

      </nav>

     <Routes>
      < Route path="/Home" element={<Home/>}/>
      < Route path="/User" element={<User/>}/>
     </Routes>
  

    </div>

  )
}

export default App