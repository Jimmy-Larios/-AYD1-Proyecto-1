import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { URLDEFAULT } from "../../consts/globales";
import {ReactSession} from 'react-client-session'

const FormRegisterFlight = () => {
    let navigate = useNavigate();
    const url = URLDEFAULT + "/flight/create";
    const idUser= ReactSession.get("id");
    const [data, setData] = useState({
        
        travelDate: "",
        origin: "",
        destination: "",
        availableSeats: "",
        price: "",
        typeFlight: ""
    });

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            idAirlineService:idUser,
            travelDate: data.travelDate,
            origin: data.origin,
            destination: data.destination,
            availableSeats: data.availableSeats,
            price: data.price,
            typeFlight: data.typeFlight
        }).then(res => {
            alert("Register flight successfully");
            navigate("/homeVuelos");
        })
        .catch(error => console.log(error));
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
                          <h3 className="h4 font-weight-bold text-theme">Register Flight</h3>
                        </div>
                        
                        <form onSubmit={(e) => submit(e)}>

                         

                          <div className="form-group">
                            <label htmlFor="todo">Travel Date</label>
                            <input onChange={(e) => handle(e)} id="travelDate" value={data.travelDate} type="date" className="form-control"/>
                          </div>

                          <div className="form-group">
                            <label htmlFor="todo">Origin</label>
                            <input onChange={(e) => handle(e)} id="origin" value={data.origin} type="text" className="form-control"/>
                          </div>

                          <div className="form-group">
                            <label htmlFor="email">Destination</label>
                            <input onChange={(e) => handle(e)} id="destination" value={data.destination} type="text" className="form-control"/>
                          </div>

                          <div className="form-group">
                            <label htmlFor="todo">Available Seats</label>
                            <input onChange={(e) => handle(e)} id="availableSeats" value={data.availableSeats} type="number" className="form-control"/>
                          </div>

                          <div className="form-group">
                            <label htmlFor="todo">Price</label>
                            <input onChange={(e) => handle(e)} id="price" value={data.price} type="number" className="form-control"/>
                          </div>

                          <div className="form-group mb-5">
                            <label htmlFor="todo">Type Flight</label>
                            <input onChange={(e) => handle(e)} id="typeFlight" value={data.typeFlight} type="number" className="form-control" placeholder="(1 outbound trip, 2 round trip)"/>
                          </div>
                        
                          <button type="submit" className="btn btn-theme" id="btn-login">Register</button>
                        
                        </form>

                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-inline-block">
                      <div className="account-block rounded-right" id="register-flight-block">
                        <div className="overlay rounded-right" />
                        <div className="account-testimonial">
                          <h4 className="text-white mb-4">FULL TRIP</h4>
                          <p className="lead text-white">If it matters to you, it matters to us!</p>
                          <p>- Group 4</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
              {/* end row */}
            </div>
            {/* end col */}
          </div>
          {/* Row */}
        </div>
      </div>
    )
};

export default FormRegisterFlight;