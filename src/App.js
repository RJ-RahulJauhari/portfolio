import './App.css';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import NavBar from './components/Navbar/NavBar';
import Project from './components/Projects/Project';
import Skills from './components/Skills/Skills';
import About from './components/About/About';

function App() {
  return (
    <div className='app'>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default App;
