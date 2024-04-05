import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
import Home from './home/Home';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
      <Home/>
      </main>
      <About/>
      <Skills/>
      <Qualification/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
