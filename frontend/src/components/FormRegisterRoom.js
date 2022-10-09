import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { URLDEFAULT } from "../consts/globales";

const FormRegisterRoom = () => {
    let navigate = useNavigate();
    const url = URLDEFAULT + "/room/create";

    const [data, setData] = useState({
        idHotel: "",
        amountPeople: ""
    });

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            idHotel: data.idHotel,
            amountPeople: data.amountPeople
        }).then(res => {
            alert("Register room successfully");
            navigate("/registerRoom");
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
                          <h3 className="h4 font-weight-bold text-theme">Register Room</h3>
                        </div>

                        <form onSubmit={(e) => submit(e)}>
                          
                          <div className="form-group mb-5">
                            <label htmlFor="todo">Id Hotel</label>
                            <input onChange={(e) => handle(e)} id="idHotel" value={data.idHotel} type="text" className="form-control"/>
                          </div>

                          <div className="form-group mb-5">
                            <label htmlFor="todo">Amount of people</label>
                            <input onChange={(e) => handle(e)} id="amountPeople" value={data.amountPeople} type="number" className="form-control"/>
                          </div>

                          <button type="submit" className="btn btn-theme" id="btn-login">Register</button>
                        
                        </form>

                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-inline-block">
                      <div className="account-block rounded-right" id="register-room-block">
                        <div className="overlay rounded-right" />
                        <div className="account-testimonial">
                          <h4 className="text-white mb-4">FULL TRIP</h4>
                          <p className="lead text-white">Your comfort is our priority!</p>
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
    )
}

export default FormRegisterRoom