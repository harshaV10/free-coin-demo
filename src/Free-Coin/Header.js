import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'

//css file
import './Header.css'
//Images
import Logo from "../images/logo-free-coins.png"
import pic from "../images/profile.png"
//Material Ui Icons
import ArrowLeft from '@mui/icons-material/ArrowForwardIos';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import Power from '@mui/icons-material/PowerSettingsNew';
import Edit from '@mui/icons-material/Edit';

//importing Routers
import Dashboard from "./DashBoard";
import Profile from "./Profile";
import Account from "./Account";
import Password from "./Password";
import Pan from "./Pan"
import Notice from "./Notice"


const Header = () => {
 const [showList, setShowList] = useState(true);
 const [shrink, setShrink] = useState(true);
 const [newShrink, setNewShrink] =useState(true);
const [edit, setEdit] =useState(false);
const [name, setName] = useState('');

const handleChange = (e) => {
    const targetname = (e.target.textContent);
    console.log(targetname);
    setName(targetname)
}


const [loading ,setLoading] =useState(false);
useEffect (()=> {
    setLoading(true)
    setTimeout(()=>{
        setLoading(false);
    },2000)
},[]); 

return ( 
        <>
        <div className="container">
        {/* SIDEBAR    */}
        <div className={shrink ? "side-bar" : "side-bar-shrink"}>
            {/* LOGO */}
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
            {/* LINKS */}
                <div className="links" >
                    <div className="home-out">
                        <div className={shrink ? "home-menu" : "home-menu-hide" } onClick={() => setShowList(!showList)}>
                            <div className="home-menu-logo">
                                <Home className="home-logo" />
                                <a href="#">HOME</a>
                            </div>
                                 <ArrowLeft className={showList? "arrow-left" : "arrow-down"}/> 
                        </div>
                        <div className={shrink ? "home-menu-shrink" : "home-menu-show"}>
                            <Home className="home-logo"/>
                        </div>
                    </div>
                    <div className={shrink ? "list-home-menu-before" : "list-home-menu-after"} >
                        <ul className={showList? "list-home-menu" : "list-home-menu active"} >
                        <Link className="Rlink"key={Dashboard} to='/'> <li onClick={(e) => handleChange(e)}><ArrowForward className="arrow-forward"/><a href="/"><p >Dashboard</p></a></li></Link>
                        <Link className="Rlink"key={Profile} to='profile' > <li onClick={(e) => handleChange(e)}><ArrowForward className="arrow-forward"/><a href="#">Profile</a></li></Link>
                        <Link className="Rlink"key={Account} to='account' > <li onClick={(e) => handleChange(e)}><ArrowForward className="arrow-forward"/><a href="#">Bank Details</a></li></Link>
                        <Link className="Rlink"key={Password} to='password' > <li onClick={(e) => handleChange(e)}><ArrowForward className="arrow-forward"/><a href="#">Change Password</a></li></Link>
                        <Link className="Rlink"key={Pan} to='pan' > <li onClick={(e) => handleChange(e)}><ArrowForward className="arrow-forward"/><a href="#">PAN Details</a></li></Link>
                        <Link className="Rlink"key={Notice} to='notice' > <li onClick={(e) => handleChange(e)}><ArrowForward className="arrow-forward"/><a href="#">Notice Board</a></li></Link>
                        </ul>
                    </div>
                </div>
        </div>
        {/* for close button */}
        <div className={newShrink ? "overlay-left" : "overlay-left-show"}>
            <div className={newShrink ? "new-side-bar" : "new-side-bar-open" }>
                {/* new-logo */}
                <div className="close-btn" onClick={() => setNewShrink(!newShrink)}>
                    <Close/>
                </div>
                <div className="new-logo">
                    <img src={Logo} alt=""/>
                </div>
                {/* new-home-options */}
                <div className="new-links" >
                    <div className="new-home-out">
                        <div className={shrink ? "home-menu" : "home-menu-hide" } onClick={() => setShowList(!showList)}>
                            <div className="home-menu-logo">
                                <Home className="home-logo" />
                                <a href="#">HOME</a>
                            </div>
                                 <ArrowLeft className={showList? "arrow-left" : "arrow-down"}/> 
                        </div>
                    </div>
                    <div className={shrink ? "list-home-menu-before" : "list-home-menu-after"}>
                        <ul className={showList? "list-home-menu" : "list-home-menu active"} onClick={() => setNewShrink(!newShrink)} >
                        <Link className="Rlink" to='/'> <li onClick={(e) => handleChange(e)}><ArrowForward className="arrow-forward"/><a href="/"><p >Dashboard</p></a></li></Link>
                        <Link className="Rlink" to='profile' > <li onClick={(e) => handleChange(e)}><ArrowForward className="arrow-forward"/><a href="#">Profile</a></li></Link>
                        <Link className="Rlink" to='account' > <li onClick={(e) => handleChange(e)}><ArrowForward className="arrow-forward"/><a href="#">Bank Details</a></li></Link>
                        <Link className="Rlink" to='password' > <li onClick={(e) => handleChange(e)}><ArrowForward className="arrow-forward"/><a href="#">Change Password</a></li></Link>
                        <Link className="Rlink" to='pan' > <li onClick={(e) => handleChange(e)}><ArrowForward className="arrow-forward"/><a href="#">PAN Details</a></li></Link>
                        <Link className="Rlink" to='notice' > <li onClick={(e) => handleChange(e)}><ArrowForward className="arrow-forward"/><a href="#">Notice Board</a></li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* MAIN-PAGE     */}
                <div className= "main-page" >
                    <div className="top-bar">
                        <div className="menu-logo"  onClick={() => setShrink(!shrink)}><Menu />
                        </div>
                        {/* for 800 and 500px */}
                            <div className={newShrink ? "menu-logo-new" : "menu-logo-new-hide" }  onClick={() => setNewShrink(!newShrink)}><Menu />
                            </div>
                        <div className="topic">{name ? name : "Dashboard"}</div>
                        <div className="profile">
                            <div className="power" >
                                <Power />
                            </div>
                            <div className="profile-pic">
                                <img  className="image-profile"  onMouseEnter={()=> setEdit(!edit)} src={pic} alt=""/>

                                <Edit className={edit ? "edit" : "see-edit"} />
                            </div>
                        </div>
                    </div>
                    <br />
                    {
                        loading ? <div className="loader">
                                    <div className="loading-bar">Loading...</div>
                                </div> : 
                    <div className="main-content">
                        {/* <Dashboard /> */}
                        <Routes>
                            <Route path="/" element={<Dashboard />}/>
                            <Route exact path="profile" element={<Profile />}/>
                            <Route exact path="account" element={<Account />}/>
                            <Route exact path="password" element={<Password />}/>
                            <Route exact path="pan" element={<Pan />}/>
                            <Route exact path="notice" element={<Notice />}/>
                        </Routes>
                        

                    </div>
                    }
                    
                </div>
        </div>
        </>
    )
}

export default Header;


// close btn = do to operate this.. we should have another div over new-side-bar