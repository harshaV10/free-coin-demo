import React, { useState} from "react";
import  "./Profile.css"


function Profile () {
    
const [btnEdit, setBtnEdit] =useState(true);
const [loading ,setLoading] =useState(true);
const [otp , setOtp] =useState(false);
const [modal, setModal] =useState(false);
const [redModal, setRedModal] =useState(false);

// loading purpose
const Load = () => {
    if (otp === false){
        setLoading(false);  
            setTimeout(() => {    
                setLoading(true)    
            },2000) 
    }
}

// otp bar input
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
    else if (otp === true){
        setTimeout(() => {
            setRedModal(true)
        },)
    }
}



    return (
        <div className="prof">
            <div className="profile-container">
                <div className="top-profile">
                        <h2>User Profile,</h2>

                        <div className="button-prof">
                            <button className={btnEdit ? "btn-edit" : "btn-edit-hide"} onClick={() => setBtnEdit(!btnEdit)}>Edit Profile</button>
                            <div className={btnEdit ? "cancel-update" : "cancel-update-hide" } >
                                <button onClick={() => setBtnEdit(!btnEdit)} className="btn-cancel">Cancel</button>
                                <div className="update-otp" onClick={EventOtp}>
                                    <div onClick={ModalGreen}>
                                        <button className="btn-update" onClick={Load}>{loading ? "Update" : "Loading..." }</button>
                                    </div>
                                </div>
                            </div>
                        </div>    
                </div>
                <br /><br />
                {/* Inputs */}
                <div >
                    <div className="inputs-prof"><label>Name  </label><input type="text" placeholder="-" disabled={btnEdit ? "true" : ""} /></div>
                    <div className="inputs-prof"><label>Gender </label>
                    <select className="select-gender" type="text" placeholder="Name" disabled={btnEdit ? "true" : ""}>
                        <option>-</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select></div>
                    <div className="inputs-prof"><label>Mobile Number </label><input type="text" placeholder="-" disabled={btnEdit ? "true" : ""}/></div>
                    <div className="inputs-prof"><label>Email Address </label><input className="cursor-red" type="text" value="crisharsha@gmail.com" disabled="true"/></div>
                    <div className="inputs-prof"><label >Joined on </label><input className="cursor-red" type="text" value="20/03/2022" disabled="true"/></div>
                    <div className="inputs-prof"><label>DOB </label><input type="date" disabled={btnEdit ? "true" : ""}/></div>
                    <div className="inputs-prof"><label>Nominee </label><input type="text" placeholder="-" disabled={btnEdit ? "true" : ""}/></div>
                    <div className="inputs-prof"><label>Relation </label><input type="text" placeholder="-" disabled={btnEdit ? "true" : ""}/></div>
                    <div className="inputs-prof"><label>Address</label><input type="text" placeholder="-" disabled={btnEdit ? "true" : ""}/></div>
                    <div className="inputs-prof"><label>City </label><input type="text" placeholder="-" disabled={btnEdit ? "true" : ""}/></div>
                    <div className="inputs-prof"><label>PIN </label><input type="text" placeholder="-" disabled={btnEdit ? "true" : ""}/></div>
                    <div className="inputs-prof"><label>Country </label><input type="text" placeholder="-" value="India" disabled={btnEdit ? "true" : ""}/></div> 
                    {otp ? <div className="inputs-prof" ><label>OTP </label><input type="text"  placeholder="-" disabled={btnEdit ? "true" : ""}/></div>
                    : " "}

                </div>      
            <div className={modal ? "modal-show" : "modal"} >
                <div className="modal-overlay">
                    OTP has been sent to your corresponding Email
                </div>
            </div>
            {/* remodal */}
            <div className={redModal ? "modal-show" : "modal"} >
                <div className="modal-overlay-red">
                    Please Enter a corresponding OTP sent to your Email
                </div>
                    <h1 className="close-modal" onClick={() => setRedModal(!redModal)}>X</h1>
            </div>
            </div>

        </div>

    )
};



export default Profile;