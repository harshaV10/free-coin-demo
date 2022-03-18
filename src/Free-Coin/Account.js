import React, { useState } from "react";

import "./Account.css"


function Account () {

const [btnEdit, setBtnEdit] = useState(true);
const [loading, setLoading] = useState(true);
const [otp , setOtp] =useState(false);
const [modal, setModal] =useState(false);
const [redModal, setRedModal] =useState(false);
const [otpName , setotpName] =useState("")




const Load = () => {
    if (otp === false){
        setLoading(false);  
            setTimeout(() => {    
                setLoading(true)    
            },2000) 
    }
}

const EventOtp = () => {
    if(otp === false){
        setTimeout(() => {
            setOtp(true)
        },2000)
    }
}

const ModalGreen = () => {
    if(otp === false){
        setTimeout(() => {
            setModal(true)
        },2000)
        setTimeout(() => {
            setModal(false)
        },4000)
    } 
    else if ( otp === true ){
        setRedModal(true)
    }
}
    


    return (
        <div className="accnt-outer">
            <div className="account-container">
                <div className="accnt-update">
                    <button type="button" className={btnEdit ? "btn-update-accnt" : "btn-update-accnt-hide"} onClick={() => setBtnEdit(!btnEdit)}>Update Bank Address</button>
                    <button onClick={() => setBtnEdit(!btnEdit)} className={btnEdit ? "cancel-accnt-update-hide" : "cancel-accnt-update" }>Cancel</button>

                </div>
                <div className="accnt-details">
                    <div className="inputs-prof"><label>Account Holder Name </label><input type="text" placeholder="-" disabled="true"/></div>
                    <div className="inputs-prof"><label>Account No. </label><input type="text" placeholder="-" disabled={btnEdit ? "true" : ""}/></div>
                    <div className="inputs-prof"><label>IFSC Code</label><input type="text" placeholder="-" disabled={btnEdit ? "true" : ""}/></div>
                    <div className="inputs-prof"><label>Branch </label><input type="text" placeholder="-" disabled={btnEdit ? "true" : ""}/></div>
                    <div className="inputs-prof"><label>Bank Name </label><input type="text" placeholder="-" disabled={btnEdit ? "true" : ""}/></div>
                    {otp ? <div className="inputs-prof"><label>OTP </label><input type="text" onInput={(e) => setotpName(e.target.value)}  placeholder="-" disabled={btnEdit ? "true" : ""}/></div> : " "}

                </div>
                <div className="accnt-submit" onClick={EventOtp}>
                    <div onClick={ModalGreen}>
                    <button className={btnEdit ? "btn-submit-accnt-hide" : "btn-submit-accnt" } onClick={Load} >{loading ? "Submit" : "Loading.." }</button>
                    </div>
                </div>
                {/* modal */}
                <div className={modal ? "modal-show" : "modal"} >
                    <div className="modal-overlay">
                        OTP has been sent to your corresponding Email
                    </div>
                </div>  

                <div className={redModal ? "accnt-modal" : "accnt-modal-hide" } >
                    <div className="modal-overlay-red">
                       {otpName ? "Please check the OTP you have entered" : "Please Enter a corresponding OTP sent to your Email"} 
                    </div>
                    <h1 className="close-modal" onClick={() => setRedModal(!redModal)}>X</h1>
                </div>

            </div>
        </div>
    )
};

export default Account;