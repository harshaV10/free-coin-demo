import React, { useState, useEffect } from "react";
import  './DashBoard.css'


function Dashboard () {

    return ( 
    <div className="body-cont">
        <div className="body">
            <div className="heading">
                <h3>Coin Today For $15 </h3>
                <p>1200000</p>
            </div>  
            <div className="welcome">
                <p>Welcome,</p>
                <h5>USER ID: FM0804</h5>
            </div> 
            <div className="main-container">
            <div className="box">
                <h5>Date of Joining</h5>
                <p>Dec 04 2021</p>
            </div>    
            <div className="box"  style={{backgroundColor: "#ff0035"}}>
                <h5>Date of Stacking</h5>
                <p>-</p>
            </div>    
            <div className="box">
                <h5>Total Stacking (FC)</h5>
                <p>0</p>
            </div>    
            <div className="box" style={{backgroundColor: "#ff0035"}}>
                <h5>Daily Rose (FC)</h5>
                <p>0</p>
            </div>    
            <div className="box">
                <h5>Stacking Wallet (FC)</h5>
                <p>Availabe/Withdraw</p>
                <p>0</p>    
            </div>    
            <div className="box" style={{backgroundColor: "#ff0035"}}>
                <h5>Earning Wallet (FC)</h5>
                <p>Availabe/Withdraw</p>
                <p>0</p> 
            </div>    
            <div className="box">
                <h5>Bonus Wallet (FC)</h5>
                <p>700000</p>
            </div>    
            <div className="box" style={{backgroundColor: "#ff0035"}}>
                <h5>Offer Wallet (FC)</h5>
                <p>Availabe / Withdraw</p>
                <p>700000</p>    
                </div>    
            <div className="box">
                <h5>Total Wallet (FC)</h5>
                <p>Coins</p>
                <p>700000</p>    
            </div>    
            <div className="box" style={{backgroundColor: "#ff0035"}}>
                <h5>Left Users / Active Left Users</h5>
                <p>0 / 0</p>    
            </div>    
            <div className="box">
                <h5>Right Users / Active Right Users</h5>
                <p>68 / 0</p>
            </div>    
            <div className="box" style={{backgroundColor: "#ff0035"}}>
                <h5>Left Business ($)</h5>
                <p>0</p>    
            </div>
            <div className="last-box">
                <h5>Right Business($)</h5>
                <p>0</p>    
            </div>    
            </div>    
        
        </div>

    </div>
    )
}

export default Dashboard;