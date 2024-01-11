import Footer from "./components/Footer"
import Projects from "./components/Projects"
import AboutMe from "./sections/AboutMe"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"

function App() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar />
      <div className="mt-24 ">
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default App
