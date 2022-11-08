import React from "react";
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Login from "../login/login"

export default function AppRouter() {

    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />} /></Route>
                <Route exact path="/Home" element={<Home />} /></Route>
            </Routes>
        </Router>);
}

function Home{
    return(
        <div>
            <h2 style={{marginTop:300}}>
                Home
            </h2>


        </div>
    )
}