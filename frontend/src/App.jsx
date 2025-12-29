import { Route, Routes } from "react-router-dom"
import Navbar from "./commonComponent/Navbar.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Expertise from "./pages/Expertise.jsx"
import Achievement from "./pages/Achievement.jsx"
import Leadership from "./pages/Leadership.jsx"
import Contact from "./pages/Contact.jsx"

function App() {
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/expertise" element={<Expertise/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/achievement" element={<Achievement/>} />
        <Route path="/leadership" element={<Leadership/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
