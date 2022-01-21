import './App.css';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import MiddlePart from './Middlesegement/MiddlePart';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function Home() {
  return (
    <>
        <Navbar/>
        <Header/>
        <MiddlePart/>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>
</>
);
}

export default Home;
