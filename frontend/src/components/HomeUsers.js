import React from "react";
import Navegacion from "./Navegacion";
import { ReactSession } from 'react-client-session';


const HomeUsers = () => {
  const username = ReactSession.get("username");
  const idUser= ReactSession.get("id");
  console.log(username);
    return (
      <div>
    <Navegacion/>
    </div>
    )
};

export default HomeUsers;