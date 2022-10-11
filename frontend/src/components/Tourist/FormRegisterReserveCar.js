import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { ReactSession } from 'react-client-session';
import { useLocation } from 'react-router-dom';
import { URLDEFAULT } from '../../consts/globales';

import NavigationUser from "./NavigationUser";

const FormRegisterReserveCar = () => {
  const url = URLDEFAULT+"/rentCar/create";
  const location = useLocation();
  const idUser= ReactSession.get("id");

  const [data, setData] = useState({
    idUser: "",
    idCar: "",
    startDate: "",
    numberOfDays: "",
    confirmPassword: ""
  });

  useEffect(() => {
    setData({
      idUser: idUser,
      idCar: location.state.idSerivice,
      startDate: "",
      numberOfDays: "",
      confirmPassword:""
    });
  }, []);

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      idUser: data.idUser,
      idCar: data.idCar,
      startDate: data.startDate,
      numberOfDays: data.numberOfDays,
      confirmPassword: data.confirmPassword
      }).then (res => {
        alert("Register successfully");
        setData({
          idUser: "",
          idCar: "",
          startDate: "",
          numberOfDays: "",
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
                        <h3 className="h4 font-weight-bold text-theme">Reserve a car</h3>
                      </div>

                      <form onSubmit={(e) => submit(e)}>
                        <div className="form-group mb-5">
                            <label htmlFor="todo">Id Usuario</label>
                            <input onChange={(e) => handle(e)} id="idUser" value={data.idUser} type="text" className="form-control"/>
                        </div>

                        <div className="form-group mb-5">
                            <label htmlFor="todo">Id Auto</label>
                            <input onChange={(e) => handle(e)} id="idAuto" value={data.idCar} type="text" className="form-control"/>
                        </div>
                        
                        <div className="form-group mb-5">
                            <label htmlFor="todo">Reservation Date</label>
                            <input onChange={(e) => handle(e)} id="startDate" value={data.startDate} type="date" className="form-control"/>
                        </div>
                        <div className="form-group mb-5">
                          <label htmlFor="todo">Number of Days</label>
                          <input onChange={(e) => handle(e)} id="numberOfDays" value={data.numberOfDays} type="number" className="form-control"/>
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
                    <div className="account-block rounded-right" id="register-reserve-car-block">
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

export default FormRegisterReserveCar;
