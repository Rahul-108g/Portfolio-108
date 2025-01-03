import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Experience from "./Component/Experience";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Contect from "./Component/Contect";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contect />
      </div>
    </>
  );
}

export default App;
