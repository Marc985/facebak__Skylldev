import React from "react";
import Sidebar from "../Components/sidebar/sidebar.jsx";
import Container from "../Components/container/container.jsx";
import { IoSettings } from "react-icons/io5";

const Settings = () => {
    return (
        <main>
            <Sidebar />
            <Container iconPage={<IoSettings />} namePage="Settings" />
        </main>
    );
};

export default Settings;
