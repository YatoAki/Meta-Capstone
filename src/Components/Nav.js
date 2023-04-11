import React from "react";
import Logo from "../icons_assets/Logo.svg"
import "./Nav.css"

const Nav = () => {
    
    return(
        <div className="topNav">
            <img src={Logo} alt="Logo" />
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservation</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </div>
    )
}

export default Nav