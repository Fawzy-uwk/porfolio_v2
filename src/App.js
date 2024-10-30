import "./App.css";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import { Footer } from "./Components/Footer";
import NavBar from "./Components/Nav";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import 'animate.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
