
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Qualification from './components/Qualification/Qualification';
import Skills from './components/Skills/Skills';
import Headder from './components/header/Headder';
import Service from './components/service/Service'
import Contact from './components/Contect/Contact';
import Footer from './components/Footer/Footer'
import Scrollup from './components/Scrollup/Scrollup';


function App() {
  return (
    <>
        <Headder/>
        <main className='main'>
          <Home/>
          <About/>
          <Skills/>
          <Service/>
          <Qualification/>
          <Contact/>
        </main>
        <Footer/>
        <Scrollup/>
    </>
  )
}

export default App;
