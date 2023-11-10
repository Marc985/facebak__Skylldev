import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import url from "../../apiUrl/APIURL";
const MessagesContent = () => {
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

    const [users, setUsers] = useState([]); //1. créer un état pour stocker les utilisateurs

    useEffect(() => {
        getUsers(); // 2. Appeler cette fonction quand le composant est monté
    }, []);

    const getUsers = async () => {
        try {
            const response = await axios.get(`${url}/users`); //3. faire la requête HTTP grâce à axios
            setUsers(response.data); // 4. stocker le résultat dans l'état
        } catch (error) {
            console.error(
                `Erreur lors de la récupération des utilisateurs: ${error}`
            );
        }
    };

    return (
        <div className="flex">
            <div className="p-2">
                {/* 5. Afficher les utilisateurs */}
                {users.map((user, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between border-r-[1px] border-gray-800 w-11 lg:w-48 overflow-y-auto"
                    >
                        {/* <h2>{user.id}</h2>*/}
                        <div className="flex flex-row gap-2 justify-arround h-full">
                            <img src={user.photo} alt={user.name} />
                            <h3>{user.username}</h3>
                        </div>
                        {/* Continue ici avec tous les autres informations de l'utilisateur */}
                    </div>
                ))}
            </div>
            <div className="p-2 w-full">
                <div className="flex items-center h-full justify-center">
                    <div>
                        <h2 className="text-center">
                            This page is under developpement{" "}
                        </h2>
                        <p className="text-center">Thanks for your Visit !</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagesContent;
