import React , { Component } from "react";
import { Route, Routes } from "react-router-dom";
import {Link} from "react-router-dom"

import Home from "./reactroutOne";

function Appp () {

    return  (
            <div>
                <h2>hello world</h2>
                    <ul>
                        <li>
                            <Link key={Home} to="/home">click to home page</Link>
                            </li>
                    </ul>
                <div>
                    <Routes>
                        <Route exact path="/home" element={<Home />} />
                    </Routes>
                </div>
            </div>
    )
}


export default Appp;