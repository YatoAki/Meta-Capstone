import React from "react"
import Nav from "./Components/Nav"
import FooterNav from "./Components/FooterNav"
import Reserve from "./Components/Reserve"
import Personal from "./Components/Personal"
import { useState } from "react"

const Booking = () => {

    const [occasion,setOccasion] = useState(null)
    const [time, setTime] = useState(null)
    const [date,setDate] = useState(null)
    const [firstName,setFirstName] = useState(null) 
    const [lastName, setLastName] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [guest,setGuest] = useState(null)
    const [secondPhoneNumber, setSecondPhoneNumber] = useState(null)
    const [timeError, setTimeError] = useState(false)
    const [firstNameError, setFirstNameError] = useState(false)
    const [phoneNumberError, setPhoneNumberError] = useState(false)
    const [guestError, setGuestError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!(occasion && time && date)){
            setTimeError(true)
        }else{
            setTimeError(false)
        }
        if (firstName && firstName.length >= 4){
            setFirstNameError(false)
        }else{
            setFirstNameError(true)
        }
        const regex = /^\d{8,12}$/;;

        if (!regex.test(phoneNumber)){
            setPhoneNumberError(true)
        }else{
            setPhoneNumberError(false)
        }

        if (!guest){
            setGuestError(true)
        }else{
            setGuestError(false)
        }
    }
    return(
        <div>
            <Nav/>
            <Reserve timeError={timeError} setOccasion={setOccasion} setTime={setTime} setDate={setDate}/>
            <Personal setFirstName={setFirstName} setLastName={setLastName} setPhoneNumber={setPhoneNumber} setSecondPhoneNumber={setSecondPhoneNumber} setGuest={setGuest} handleSubmit={handleSubmit} firstNameError={firstNameError} phoneNumberError={phoneNumberError} guestError={guestError}/>
            <FooterNav/>
            
        </div>
    )
}

export default Booking