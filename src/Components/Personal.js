import React from "react";
import "./Personal.css"
const Personal = (props) => {

    return(
        <div className="Personal">
            <h1>Please fill the form below</h1>
            <form className="form">
                <div className="left">
                    <div>
                        <label htmlFor="firstName">
                            First Name* {props.firstNameError ? <span className="alart">Invalid</span> : <span style={{ visibility: 'hidden'}}>a</span>}
                        </label>
                        <input type="text" id="firstName" required onChange={(e) => {props.setFirstName(e.target.value)}}/>
                    </div>

                    <div>
                        <label htmlFor="phoneNumber">
                            Phone Number* {props.phoneNumberError ? <span className="alart">Invalid</span> : <span style={{ visibility: 'hidden'}}>a</span>}
                        </label>
                        <input type="tel" id="phoneNumber" required onChange={(e) => {props.setPhoneNumber(e.target.value)}}/>
                    </div>
                    <select name="" id="" onChange={(e) => {props.setGuest(e.target.value)}}>
                        <option value="" selected disabled>Expected Number of Guests</option>
                        <option value="1 Person">1 Person</option>
                        <option value="2 People">2 People</option>
                        <option value="3-5 People">3-5 People</option>
                        <option value="6-8 People">6-8 People</option>
                        <option value="9-12 Peopl">9-12 People</option>
                        <option value="13-15 People">13-15 People</option>
                    </select>
                    {props.guestError ? <span className="alart">Choose the number of guests</span> : <span style={{ visibility: 'hidden'}}>a</span>}
                    <p id="note">For reservation of more than 15 people, <br/> Call (+95) 9 123 456 879</p>
                    <input type="submit" value="Confirm" id="submit" onClick={props.handleSubmit}/>
                </div>
                <div className="right">
                    <div>
                        <label htmlFor="lastName">
                            Last Name
                        </label>
                        <input type="text" id="lastName" onChange={(e) => {props.setLastName(e.target.value)}}/>
                    </div>

                    <div>
                        <label htmlFor="secondPhoneNumber">
                            Phone Number (Opitional)
                        </label>
                        <input type="tel" id="secondPhoneNumber" onChange={(e) => {props.setSecondPhoneNumber(e.target.value)}}/>
                    </div>
                </div>
            </form>
        </div>
    )  
}

export default Personal