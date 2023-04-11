import React from "react"
import HeroSection from "./Components/HeroSection";
import SpecialSection from "./Components/SpecialSection";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";
import FooterNav from "./Components/FooterNav";
import Nav from "./Components/Nav"

const HomePage = () => {

    return(
        <div>
            <Nav/>
            <HeroSection/>
            <SpecialSection/>
            <Testimonials/>
            <About/>
            <FooterNav/>
        </div>
    )
}

export default HomePage