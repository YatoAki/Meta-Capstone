import React from "react";
import "./SpecialSection.css"
import Button from "./SmallComponents/Button"
import SpecialCard from "./SmallComponents/SpecialCard"
import greenSalad from "../icons_assets/greek salad.jpg"
import bruchette from "../icons_assets/bruchetta.svg"
import lemonDessert from "../icons_assets/lemon dessert.jpg"

const SpecialSection = () => {

    const specialMenu = [
        {
            text:"Greek Salad",
            img: greenSalad,
            price:12.54,
            description:"Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, and olive oil. Common additions include green bell pepper slices or caper berries"
        },
        {
            text:"Bruchette",
            img: bruchette,
            price:5.99,
            description:"Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt. Variations may include toppings of tomato, vegetables, beans, cured meat, or cheese. In Italy, bruschetta is often prepared using a brustolina grill"
        },
        {
            text:"Lemon Dessert",
            img:lemonDessert,
            price:5.00,
            description:"The best lemon desserts are full of tangy flavors without overpowering your senses. They are the perfect addition to a dessert table and for special occasions. These sweet treats are game-changers in the culinary dessert world. "
        },
        {
            text:"Greek Salad",
            img: greenSalad,
            price:12.54,
            description:"Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, and olive oil. Common additions include green bell pepper slices or caper berries"
        },
        {
            text:"Bruchette",
            img: bruchette,
            price:5.99,
            description:"Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt. Variations may include toppings of tomato, vegetables, beans, cured meat, or cheese. In Italy, bruschetta is often prepared using a brustolina grill"
        },
        {
            text:"Lemon Dessert",
            img:lemonDessert,
            price:5.00,
            description:"The best lemon desserts are full of tangy flavors without overpowering your senses. They are the perfect addition to a dessert table and for special occasions. These sweet treats are game-changers in the culinary dessert world. "
        }
    ]
    return(
        <div className="specialSection">
            <div className="topSpecial">
                <h2>This weeks specials!</h2>
                <Button text={"Online Menu"}/>
            </div>
            <div className="bottomSpecial">
                {specialMenu.map((item) => {
                    return(
                        <SpecialCard img={item.img} text={item.text} price={item.price} description={item.description}/>
                    )
                })}
            </div>
        </div>
    )
}

export default SpecialSection