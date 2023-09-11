import React from "react";
import Sidebar from "../Components/sidebar/sidebar.jsx";
import Container from "../Components/container/container.jsx";
import { BiSolidShoppingBagAlt } from "react-icons/bi";

const Marketplace = ({isAuthentified}) => {
  if(isAuthentified)
  return "";
else{
    return (
        <main>
            <Sidebar />
            <Container
                iconPage={<BiSolidShoppingBagAlt />}
                namePage="Marketplace"
            />
        </main>
    );
}
};

export default Marketplace;
