import React from "react";
import Sidebar from "../Components/sidebar/sidebar.jsx";
import Container from "../Components/container/container.jsx";

const Profile = () => {
    return (
        <main>
            <Sidebar />
            <Container namePage="Profile" />
        </main>
    );
};

export default Profile;
