import React from "react";
import "./TestCard.css"

const TestCard = (props) => {
    return(
        <div className="TestCard">
            <div>
                <img src={props.img} alt="" />
                <h4>{props.name}</h4>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default TestCard