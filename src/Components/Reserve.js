import React from "react";
import "./Reserve.css"
import pic from "../icons_assets/restaurant.jpg"

const Reserve = () => {

    return(
        <div className="Reserve">
            <div className="ReserveText">
                <h1>Reserve a table</h1>
                <p>We assure you an wonderful time.</p>
                <select id="occasion">
                    <option selected disabled>Choose an occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <div className="time">
                    <select id="res-time">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <input type="date" id="date"/>
                </div>
            </div>
            <img src={pic} alt="" />
        </div>
    )
}

export default Reserve