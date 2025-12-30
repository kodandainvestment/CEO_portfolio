import Navbar from "./commonComponent/Navbar.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Expertise from "./pages/Expertise.jsx"
import Achievement from "./pages/Achievement.jsx"
import Leadership from "./pages/Leadership.jsx"
import Contact from "./pages/Contact.jsx"
import Footer from "./commonComponent/Footer.jsx"

function App() {
  return(
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
      <section id="achievement">
        <Achievement />
      </section>
      <section id="leadership">
        <Leadership />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
