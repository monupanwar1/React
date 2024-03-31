import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";


const App = () => {
  return (
    <div className="">
      <nav className="bg-blue-500  p-3 gap-6 items-center flex justify-center">
        <Link to="/Home">Home</Link>
        <Link to="/Show">Show</Link>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Show" element={<Show />} />
      </Routes>


     
    </div>
  );
};

export default App;
