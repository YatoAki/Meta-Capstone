import React from "react";
import "./SpecialCard.css";

const SpecialCard = (props) => {

    return(
        <div className="specialCard">
            <img src={props.img} alt="" />
            <div className="specialCardTitle">
                <h4>{props.text}</h4>
                <h4>${props.price}</h4>
            </div>
            <div className="specialBottom">
                <p>
                    {props.description}
                </p>
                <a>Order a delivery</a>
            </div>
            
        </div>
    )
}

export default SpecialCard