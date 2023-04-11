import React from "react";
import "./Personal.css"
const Personal = () => {

    return(
        <div className="Personal">
            <h1>Please fill the form below</h1>
            <div className="form">
                <div className="left">
                    <div>
                        <label htmlFor="firstName">
                            First Name*
                        </label>
                        <input type="text" id="firstName"/>
                    </div>

                    <div>
                        <label htmlFor="phoneNumber">
                            Phone Number*
                        </label>
                        <input type="tel" id="phoneNumber"/>
                    </div>
                    <select name="" id="">
                        <option value="" selected disabled>Expected Number of Guests</option>
                        <option value="">1 Person</option>
                        <option value="">2 People</option>
                        <option value="">3-5 People</option>
                        <option value="">6-8 People</option>
                        <option value="">9-12 People</option>
                        <option value="">13-15 People</option>
                    </select>
                    <p id="note">For reservation of more than 15 people, <br/> Call (+95) 9 123 456 879</p>
                    <button id="submit">Confirm</button>
                </div>
                <div className="right">
                    <div>
                        <label htmlFor="lastName">
                            Last Name
                        </label>
                        <input type="text" id="lastName"/>
                    </div>

                    <div>
                        <label htmlFor="secondPhoneNumber">
                            Phone Number (Opitional)
                        </label>
                        <input type="tel" id="secondPhoneNumber"/>
                    </div>
                </div>
            </div>
        </div>
    )  
}

export default Personal