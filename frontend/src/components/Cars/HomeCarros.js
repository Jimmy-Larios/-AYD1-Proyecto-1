import React from "react";
import { ReactSession } from 'react-client-session';
import FormRegisterCar from './FormRegisterCar';
import NavigationCar from "./NavigationCar";

const HomeCarros = () => {
  const username = ReactSession.get("username");
  const idUser= ReactSession.get("id");

  console.log(username);
    return (
      <>
        <NavigationCar/>
        <FormRegisterCar/>
      </>
    )
};

export default HomeCarros;