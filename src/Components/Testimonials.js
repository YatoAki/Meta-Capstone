import React from "react";
import "./Testimonials.css"
import TestCard from "./SmallComponents/TestCard";
import HumanPic from "../icons_assets/restaurant chef B.jpg"

const Testimonials = () => {

    const humanData = [
        {
            name: "Koko",
            img: HumanPic,
            text: "It is really nice. I did a great choice eating here"
        },
        {
            name: "Nono",
            img: HumanPic,
            text: "Yayy. Best food ever. I would always come back here to enjoy the food again"
        },
        {
            name: "Koko",
            img: HumanPic,
            text: "It is really nice"
        },
        {
            name: "Popo",
            img: HumanPic,
            text: "Nice. Enjoyed the food"
        }
    ]

    return(
        <div className="Testimonials">
            <h2>Hear what our customers say!</h2>
            <div className="testCards">
                {humanData.map((i) => {
                    return(
                        <TestCard name={i.name} img={i.img} text={i.text}/>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Testimonials