import Nav from "./Components/Nav"
import './App.css';
import HeroSection from "./Components/HeroSection";
import SpecialSection from "./Components/SpecialSection";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="App">
      <Nav/>
      <HeroSection/>
      <SpecialSection/>
      <Testimonials/>
    </div>
  );
}

export default App;
