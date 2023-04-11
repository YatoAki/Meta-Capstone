import Nav from "./Components/Nav"
import './App.css';
import HeroSection from "./Components/HeroSection";
import SpecialSection from "./Components/SpecialSection";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";
import FooterNav from "./Components/FooterNav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <HeroSection/>
      <SpecialSection/>
      <Testimonials/>
      <About/>
      <FooterNav/>
    </div>
  );
}

export default App;
