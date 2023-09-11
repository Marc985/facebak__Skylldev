import React from "react";
import Sidebar from "../Components/sidebar/sidebar.jsx";
import Container from "../Components/container/container.jsx";
import { IoChatbubbles } from "react-icons/io5";

const Messages = () => {
    return (
        <main>
            <Sidebar />
            <Container iconPage={<IoChatbubbles />} namePage="Messages" />
        </main>
    );
};

export default Messages;
