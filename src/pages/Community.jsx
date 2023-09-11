import React from "react";
import Sidebar from "../Components/sidebar/sidebar.jsx";
import Container from "../Components/container/container.jsx";
import { HiUsers } from "react-icons/hi";

const Community = () => {
    return (
        <main>
            <Sidebar />
            <Container iconPage={<HiUsers />} namePage="Community" />
        </main>
    );
};

export default Community;
