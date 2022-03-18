import React ,{ useState} from "react";
import "./Pan.css"


function Pan () {

const [loading, setLoading] = useState(true);
const [otp , setOtp] =useState(false);
const [modal, setModal] =useState(false);
const [redModal, setRedModal] =useState(false);
const [name, setName] =useState("")
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
}

const ModalRed = () => {
    if(otp===true) {
        setRedModal(true);
        setTimeout(() => {
            setRedModal(false)
        },2000)

    }
}
const handler = (e) => {
    e.preventDefault();
    const T = setName(e.target.value)
}
    return (
        <div className="pan-container">
                    <form onSubmit={handler}>
                <div className="pan-inputs">

                        <div className="inputs-prof"><label>Name as in the PAN CARD</label><input type="text" placeholder="-" required="required" onChange={handler}/></div>
                        <div className="inputs-prof"><label>Number</label><input type="text" placeholder="-" required="required" onChange={handler}/></div>
                        <div className="inputs-prof"><label>PAN CARD</label><input type="file" placeholder="-" onChange={handler}/></div>
                        {otp ? <div className="inputs-prof"><label>OTP </label><input type="text"  placeholder="-"/></div> : " "}

                {name ? <div className="submit-pan" onClick={ModalGreen}>
                    <div className="accnt-submit" onClick={EventOtp}>
                        <button className="btn-submit-pan"  type="submit" onClick={Load}>{loading ? "Submit" : "Loading.." }</button>
                    </div>
                </div> : <div className="accnt-submit" onClick={ModalRed}>
                    <button className="btn-submit-pan">{loading ? "submit" : "loading" }</button>
                    </div>}
                </div>
                    </form>
            <div className="note">
                <p>Note :</p>
                This is one time and irreversible step
            </div>

            <div className={modal ? "modal-show" : "modal"} >
                <div className="modal-overlay">
                    OTP has been sent to your corresponding Email
                </div>
            </div> 
            <div className={redModal ? "accnt-modal" : "accnt-modal-hide" }>
             <div className={redModal ? "modal-overlay-red" : "modal-overlay-red-hide" }>
                   {otpName ? "Please check the OTP you have entered" : "Please Enter a corresponding OTP sent to your Email"} 
                </div>
            </div>

            
        </div>
    )
}


export default Pan;