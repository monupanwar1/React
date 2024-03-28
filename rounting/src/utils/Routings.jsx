import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home'
import Contact from '../components/Contact'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Routing
