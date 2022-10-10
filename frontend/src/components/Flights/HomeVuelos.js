import React from "react";
import { ReactSession } from 'react-client-session';

import NavigationFlight from "./NavigationFlight";
import FormRegisterFlight from "./FormRegisterFlight";


const HomeVuelos = () => {
  const username = ReactSession.get("username");
  const idUser= ReactSession.get("id");
  console.log(username);
    return (
      <>
        <NavigationFlight/>
        <FormRegisterFlight/>
      </>
    )
};

export default HomeVuelos;