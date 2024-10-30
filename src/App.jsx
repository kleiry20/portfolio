import "./App.css";
import "./responsive.css";
import { Experience } from "./components/Experience/Experience";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="main">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
