import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Marketplace from "../pages/Marketplace.jsx";
import Community from "../pages/Community.jsx";

import Settings from "../pages/Settings.jsx";
import Messages from "../pages/Messages.jsx";
import Profile from "../pages/Profile.jsx";

import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Marketplace" element={<Marketplace />} />
                <Route path="/Community" element={<Community />} />
                <Route path="/Settings" element={<Settings />} />
                <Route path="/Messages" element={<Messages />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Register" element={<Register />} />
                <Route
                    path="*"
                    element={<h1 className="text-white">404 Error</h1>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
