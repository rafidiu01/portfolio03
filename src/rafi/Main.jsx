



import Home from "../rafipages/Home";
import About from "../rafipages/About";
import Skills from "../rafipages/Skills";
import Projects from "../rafipages/Projects";
import Education  from '../rafipages/Education';
import Experience from "../rafipages/Experience";
import Contact from "../rafipages/Contact";
import Footer from "../rafipages/Footer";
import Blog from "../rafipages/Blog";


function App() {
  return (
    <div className="min-h-screen bg-gray-800">
  <section id="home"><Home /></section>
  <section id="about"><About /></section>
  <section id="skills"><Skills /></section>
  <section id="projects"><Projects /></section>
  <section id="work"><Experience /></section>
  <section id="education"><Education /></section>
  <section id="blog"><Blog /></section>
  <section id="contact"><Contact /></section>
      <Footer/>
    </div>
  );
}

export default App;
