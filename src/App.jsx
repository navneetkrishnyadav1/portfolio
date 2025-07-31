import './App.css';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Resume from './components/Resume';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <ProjectList/>
      <Certifications/>
      <Contact/>
      <Resume/>
      <Footer/>
    </div>
  );
}
export default App;
