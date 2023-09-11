import React from "react";
import Sidebar from "../Components/sidebar/sidebar.jsx";
import Container from "../Components/container/container.jsx";
import { AiFillHome } from "react-icons/ai";

const Home = () => {
    return (
        <main>
            <Sidebar />
            <Container iconPage={<AiFillHome />} namePage="Home" />
        </main>
    );
};

export default Home;
