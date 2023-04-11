import React from "react";
import "./FooterNav.css"
import Logo from "../icons_assets/Logo .svg"

const FooterNav = () => {

    return(
        <div className="FooterNav">
            <img src={Logo} alt="" />
            <div>
                <h3>Doormat <br/>Navigation</h3>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservation</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact Information</h3>
                <ul>
                    <li>Email</li>
                    <li>Address</li>
                    <li>Phone Number</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">TikTok</a></li>
                </ul>
            </div>
        </div>
    )
}

export default FooterNav