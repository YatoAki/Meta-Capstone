import React from "react"
import Nav from "./Components/Nav"
import FooterNav from "./Components/FooterNav"
import Reserve from "./Components/Reserve"
import Personal from "./Components/Personal"

const Booking = () => {

    return(
        <div>
            <Nav/>
            <Reserve/>
            <Personal/>
            <FooterNav/>
            
        </div>
    )
}

export default Booking