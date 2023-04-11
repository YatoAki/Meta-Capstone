import React from "react";
import "./HeroSection.css"
import ResturantFoodImg from "../icons_assets/restauranfood.jpg"
import Button from "./SmallComponents/Button";

const HeroSection = () => {

    return(
        <div className="heroSection">
            <div>
                
                <h1>Little Lemon</h1>
                <h5>Chicago</h5>
                
                <p>
                    We are a family owned <br/>
                    Mediterranean restaurant, <br/>
                    focused on traditional <br/>
                    recipes served with a modern <br/>
                    twist.
                </p>

                <Button text={"Reserve a table"} link={"/booking"}/>
            </div>
            <img src={ResturantFoodImg} alt="heroImage" />
        </div>
    )
}

export default HeroSection;