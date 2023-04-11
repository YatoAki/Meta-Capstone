import React from "react";
import Logo from "../icons_assets/Logo.svg"
import "./Nav.css"

const Nav = () => {
    
    return(
        <div className="topNav">
            <a href="/"><img src={Logo} alt="Logo" /></a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href={"/booking"}>Reservation</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </div>
    )
}

export default Nav