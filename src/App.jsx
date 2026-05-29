import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      <Navbar />

      <Hero />

      <About />

      <TechStack />

      <Projects />

      <Contact />

    </div>
  );
}

export default App;