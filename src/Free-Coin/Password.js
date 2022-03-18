import React, {useState} from 'react';
import "./Password.css"


function Password () {

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
        <div className='password-container'>
            <div className="password-inputs">
                    <div className="inputs-prof"><label>Old Password</label><input type="password" placeholder="-"/></div>
                    <div className="inputs-prof"><label>New Password</label><input type="password" placeholder="-"/></div>
                    <div className="inputs-prof"><label>Confirm New Password</label><input type="password" placeholder="-"/></div>
                    {otp ? <div className="inputs-prof"><label>OTP </label><input type="text" onInput={(e) => setotpName(e.target.value)}  placeholder="-"/></div> : " "}
            </div>
            <div className="accnt-submit" onClick={EventOtp}>
                    <div onClick={ModalGreen}>
                    <button className="btn-submit-accnt"  onClick={Load} >{loading ? "Submit" : "Loading.." }</button>
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
        )
}

export default Password;