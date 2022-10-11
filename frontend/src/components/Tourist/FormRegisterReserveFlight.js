import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { ReactSession } from 'react-client-session';
import { useLocation } from 'react-router-dom';
import { URLDEFAULT } from "../../consts/globales";

import NavigationUser from "./NavigationUser";

const FormRegisterReserveFlight = () => {
  const url = URLDEFAULT+"/buyTicket/create";
  const location = useLocation();
  const idUser= ReactSession.get("id");

  const [data, setData] = useState({
    idUser: "",
    idFlight: "",
    reservationDate: "",
    numberOfSeats: "",
    confirmPassword: ""
  });

  useEffect(() => {
    setData({
      idUser: idUser,
      idFlight: location.state.idSerivice,
      reservationDate: "",
      numberOfSeats: "",
      confirmPassword:""
    });
  }, []);
  
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      idUser: data.idUser,
      idFlight: data.idFlight,
      reservationDate: data.reservationDate,
      numberOfSeats: data.numberOfSeats,
      confirmPassword: data.confirmPassword
      }).then (res => {
        alert("Register successfully");
        setData({
          idUser: "",
          idFlight: "",
          reservationDate: "",
          numberOfSeats: "",
          confirmPassword: ""
        });
      }).catch((error) => {console.log(error)});
  }

  function handle(e) {
      const newData = {...data};
      newData[e.target.id] = e.target.value;
      setData(newData);
      console.log(newData);
  }    

  return (
    <>
    <NavigationUser/>
    <div id="register-section">
      <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="mb-5">
                        <h3 className="h4 font-weight-bold text-theme">Reserve  of Seats</h3>
                      </div>

                      <form onSubmit={(e) => submit(e)}>
                        <div className="form-group mb-5">
                          <label htmlFor="todo">Id Usuario</label>
                          <input onChange={(e) => handle(e)} id="idUser" value={data.idUser} type="text" className="form-control"/>
                        </div>

                        <div className="form-group mb-5">
                          <label htmlFor="todo">Id Flight</label>
                          <input onChange={(e) => handle(e)} id="idFlight" value={data.idFlight} type="text" className="form-control"/>
                        </div>

                        <div className="form-group mb-5">
                          <label htmlFor="todo">Reservation Date</label>
                          <input onChange={(e) => handle(e)} id="reservationDate" value={data.reservationDate} type="date" className="form-control"/>
                        </div>

                        <div className="form-group mb-5">
                          <label htmlFor="todo">Number of Seats</label>
                          <input onChange={(e) => handle(e)} id="numberOfSeats" value={data.numberOfSeats} type="number" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="todo">Confirm Password</label>
                            <input onChange={(e) => handle(e)} id="confirmPassword" value={data.confirmPassword} type="password" className="form-control"/>
                        </div>

                          <button type="submit" className="btn btn-theme" id="btn-login">Register</button>
                      </form>

                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-inline-block">
                    <div className="account-block rounded-right" id="register-reserve-airplane-block">
                      <div className="overlay rounded-right" />
                      <div className="account-testimonial">
                        <h4 className="text-white mb-4">FULL TRIP</h4>
                        <p className="lead text-white">A clean bed for a tired soul!</p>
                        <p>- Group 4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
} 

export default FormRegisterReserveFlight;
