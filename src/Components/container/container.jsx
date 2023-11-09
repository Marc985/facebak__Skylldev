import React from "react";
import { Link } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";
import { IoChatbubbles, IoSettings } from "react-icons/io5";

import HomeContent from "../contents/homeContent.jsx";
import CommunityContent from "../contents/communityContent.jsx";
import MarketplaceContent from "../contents/marketplaceContent.jsx";
// import NewsContent from "../contents/newsContent.jsx";

import MessagesContent from "../contents/messagesContent.jsx";
import SettingsContent from "../contents/settingsContent.jsx";
import ProfileContent from "../contents/profileContent.jsx";
// import NotificationsContent from "../contents/notificationsContent.jsx";

import UserProfil from "../userProfil/userProfil.jsx";

import Profile1 from "../../assets/imgs/profile.jpg";

import Footer from "../footer/footer.jsx";
import { useState, useEffect } from "react";

const Container = ({ iconPage, namePage }) => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUserName(user.username);
        setEmail(user.email);
        setId(user.id);
    }, []);
    return (
        <section>
            <div className="ml-16 lg:ml-48 max-h-screen overflow-auto bg-[#050e15bd] h-screen flex justify-center">
                <div className="w-full">
                    {/* ------- Header -------- */}
                    <header className="bg-black py-3 px-6 flex justify-between items-center border-b-[1px] border-gray-800 fixed w-[-webkit-fill-available]">
                        {/* -----------------------------//-------------------------------- */}
                        <div>
                            {/* Icon Page where we are actually ? */}
                            <div className="flex items-center gap-3">
                                <p className="flex items-center gap-3">
                                    {iconPage}{""}
                                    <span className="hidden md:block">
                                        {namePage}
                                    </span>
                                </p>
                            </div>
                        </div> 

                        {/* -----------------------------//-------------------------------- */}
                        <div className="flex gap-3 lg:gap-5">
                            <div className="flex gap-1 md:gap-3 lg:gap-5">
                                {/* Messages */}
                                <div className="flex items-center">
                                    <div className="bg-gray-900 rounded-full p-0 mr-1 md:p-2 md:mr-0">
                                        <Link
                                            to="/Messages"
                                            className="cursor-pointer"
                                        >
                                            <IoChatbubbles />
                                        </Link>
                                    </div>
                                </div>

                                {/* Settings */}
                                <div className="flex items-center">
                                    <div className="bg-gray-900 rounded-full p-0 mr-1 md:p-2 md:mr-0">
                                        <Link
                                            to="/Settings"
                                            className="cursor-pointer"
                                        >
                                            <IoSettings />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Profile */}
                            <UserProfil
                                pseudo={username}
                                username={email}
                                userImage={Profile1}
                            />
                            {/* {username && <span className="text-white font-semibold text-[0.8rem]">
                                            {username}
                                        </span>}
                                        {email && <span className="text-gray-400 text-sm  text-[0.7rem]">
                                            {email}
    </span>}*/}
                        </div>
                    </header>

                    {/* ------- Main [Page Principale de chaque Pages] -------- */}
                    <div className="flex flex-col justify-between h-full mt-[5rem]">
                        <main>
                            {/* 
                        --- if namePage == "Home" --> show HomeContent 
                        --- if namePage == "Community" ---> show CommunityContent
                        --- if namePage == "Marketplace" ---> show MarketplaceContent
                        --- if namePage == "Profile" ---> show ProfileContent
                        --- if namePage == "Settings" ---> show SettingsContent
                        --- if namePage == "Messages"---> show MessagesContent
                        */}
                            {namePage === "Home" ? (
                                <HomeContent />
                            ) : namePage === "Community" ? (
                                <CommunityContent />
                            ) : namePage === "Marketplace" ? (
                                <MarketplaceContent />
                            ) : namePage === "Profile" ? (
                                <ProfileContent />
                            ) : namePage === "Settings" ? (
                                <SettingsContent />
                            ) : namePage === "Messages" ? (
                                <MessagesContent />
                            ) : (
                                <div>Not Found</div>
                            )}
                        </main>

                        {/* ------- Footer -------- */}

                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Container;
