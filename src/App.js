import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Qualification from './components/qualification/Qualification';
import { ScrollUp } from './components/scrollup/ScrollUp';
import Skills from './components/skills/Skills';
import Home from './home/Home';

function App() {
  return (
    <>
      <Header/>

      <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Projects/>
      <Contact/>
      </main>

      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
