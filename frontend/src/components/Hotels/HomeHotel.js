import React from "react";
import { ReactSession } from 'react-client-session';

import NavigationHotel from './NavigationHotel';
import FormRegisterHotel from "./FormRegisterRoom";

const HomeHotel = () => {
  const username = ReactSession.get("username");
  const idUser= ReactSession.get("id");
  
  console.log(username);
    return (
      <>
        <NavigationHotel/>
        <FormRegisterHotel/>
      </>
    );
};

export default HomeHotel;