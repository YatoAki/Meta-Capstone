import React from "react";
import "./About.css"
import pic1 from "../icons_assets/Mario and Adrian A.jpg"
import pic2 from "../icons_assets/Mario and Adrian b.jpg"

const About = () => {

    return(
        <div className="About">
            <div className="aboutText">
                <h1>Little Lemon</h1>
                <h5>Chicago</h5>
                
                <p>
                    We are a family owned <br/>
                    Mediterranean restaurant, <br/>
                    focused on traditional <br/>
                    recipes served with a modern <br/>
                    twist.
                </p>
            </div>

            <div className="aboutPhoto">
                <img src={pic2} alt="" />
                <img src={pic1} alt="" />
                
            </div>
        </div>
    )
}

export default About