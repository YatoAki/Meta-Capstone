import React from "react";
import "./Reserve.css"
import pic from "../icons_assets/restaurant.jpg"

const Reserve = (props) => {

    return(
        <div className="Reserve">
            <div className="ReserveText">
                <h1>Reserve a table</h1>
                <p>We assure you an wonderful time.</p>
                <select id="occasion" onChange={
                    (e) => {props.setOccasion(e.target.value)}
                }>
                    <option selected disabled>Choose an occasion</option>
                    <option value={"Birthday"}>Birthday</option>
                    <option value={"Anniversary"}>Anniversary</option>
                </select>
                <div className="time">
                    <select id="res-time" onChange={
                        (e) => {props.setTime(e.target.value)
                    }}>
                        <option disabled selected>Date</option>
                        <option value={"17:00"}>17:00</option>
                        <option value={"18:00"}>18:00</option>
                        <option value={"19:00"}>19:00</option>
                        <option value={"20:00"}>20:00</option>
                        <option value={"21:00"}>21:00</option>
                        <option value={"22:00"}>22:00</option>
                    </select>
                    <input type="date" id="date" onChange={(e) => {props.setDate(e.target.value)}}/>
                </div>
                {props.timeError ? <span className="alart">Error: Fill all the requried Information</span> : <span style={{ visibility: 'hidden'}}>a</span>}
            </div>
            <img src={pic} alt="" />
        </div>
    )
}

export default Reserve