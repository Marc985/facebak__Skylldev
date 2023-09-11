import React from "react";
import UserProfil from "../userProfil/userProfil.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

const ContactList = () => {
    const [socket, setSocket] = useState(null);
    const [users, setUsers] = useState([]);
    const [id, setId] = useState("");

    // useEffect(() => {
    //     const newSocket = io("http://localhost:4000");

    //     newSocket.on("connect", () => {
    //         console.log("Connecté au serveur WebSocket");
    //     });
    //     newSocket.on("disconnect", () => {
    //         console.log("Déconnecté du serveur WebSocket");
    //     });

    //     setSocket(newSocket);

    //     return () => {
    //         if (socket) {
    //             socket.disconnect();
    //         }
    //     };
    // }, []);

    // useEffect(() => {
    //     const userString = localStorage.getItem("user");
    //     const user = JSON.parse(userString);
    //     setId(user.id);
    // }, []);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get("http://localhost:8080/users");
                const users = res.data;
                setUsers(users);
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
    }, []);

    return (
        <div className="max-h-[100vh] overflow-y-auto">
            {users.map((user) => {
                return (
                    <div key={user.id} className="flex items-center gap-3 my-5">
                        {/* //cercle vert qui se met en ligne quand l'utilisateur est connecté */}
                        <div className="bg-green-800 w-2 h-2 rounded-full"></div>
                        <UserProfil
                            id={user.id}
                            pseudo={user.username}
                            username={user.email}
                            userImage={user.photo}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ContactList;
