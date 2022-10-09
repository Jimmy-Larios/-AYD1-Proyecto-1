import React from "react";
import Navegacion from "./Navegacion";
import { ReactSession } from 'react-client-session';


const HomeCarros = () => {
  const username = ReactSession.get("username");
  const idUser= ReactSession.get("id");
  console.log(username);
    return (
      <div>
    <Navegacion/>
    </div>
    )
};

export default HomeCarros;