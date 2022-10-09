import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { URLDEFAULT } from "../consts/globales";

const FormRegisterCar = () => {
  let navigate = useNavigate();
  const url = URLDEFAULT + "/car/create";

  const [data, setData] = useState({
    idCarRentalService: "",
    carRegistration: "",
    brand: "",
    model: "",
    price: ""
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      idCarRentalService: data.idCarRentalService,
      carRegistration: data.carRegistration,
      brand: data.brand,
      model: data.model,
      price: data.price
    }).then(res => {
      alert("Register car successfully");
      navigate("/registerCar");
    })
    .catch((error) => console.log(error));
  }

  function handle(e) {
    const newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
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
                          <h3 className="h4 font-weight-bold text-theme">Register Auto</h3>
                          <p className="text-muted mt-2 mb-5">Rental Car</p>
                        </div>
                        <form onSubmit={(e) => submit(e)}>
                          
                          <div className="form-group">
                            <label htmlFor="todo">ID Car Rental Service</label>
                            <input onChange={(e) => handle(e)} id="idCarRentalService" value={data.idCarRentalService} type="text" className="form-control"/>
                          </div>

                          <br></br>
                          <br></br>

                          <div className="form-group">
                            <label htmlFor="todo">Car Registration</label>
                            <input onChange={(e) => handle(e)} id="carRegistration" value={data.carRegistration} type="text" className="form-control"/>
                          </div>

                          <br></br>

                          <div className="form-group">
                            <label htmlFor="todo">Brand</label>
                            <input onChange={(e) => handle(e)} id="brand" value={data.brand} type="text" className="form-control"/>
                          </div>

                          <br></br>

                          <div className="form-group mb-5">
                            <label htmlFor="todo">Model</label>
                            <input onChange={(e) => handle(e)} id="model" value={data.model} type="text" className="form-control"/>
                          </div>
                          
                          <div className="form-group mb-5">
                            <label htmlFor="todo">Price</label>
                            <input onChange={(e) => handle(e)} id="price" value={data.price} type="number" className="form-control"/>
                          </div>

                          <button type="submit" className="btn btn-theme" id="btn-login">Register</button>

                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-inline-block">
                      <div className="account-block rounded-right" id="register-car-block">
                        <div className="overlay rounded-right" />
                        <div className="account-testimonial">
                          <h4 className="text-white mb-4">FULL TRIP</h4>
                          <p className="lead text-white">Love the road!</p>
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
  );
}

export default FormRegisterCar;