import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URLDEFAULT } from '../consts/globales';

const SignUp = () => {
  let navigate = useNavigate();
  const url = URLDEFAULT+"/user/create";

  const [data, setData] = useState({
    name: "",
    lastName: "",
    user: "",
    dateOfBirth: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function submit(e) {
    if(data.confirmPassword == data.password) {
      e.preventDefault();
      Axios.post(url, {
        name: data.name,
        lastName: data.lastName,
        user: data.user,
        dateOfBirth: data.dateOfBirth,
        email: data.email,
        password: data.password
        }).then (res => {
          alert("Register user successfully");
          navigate("/login");
          
        })
        .catch((error) => {console.log(error)});
      } else {
        alert("Passwords don't match");
      }
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
                <div className="col-lg-6 d-none d-lg-inline-block">
                  <div className="account-block rounded-right" id="register-block">
                    <div className="overlay rounded-right" />
                    <div className="account-testimonial">
                      <h4 className="text-white mb-4">FULL TRIP</h4>
                      <p className="lead text-white">We are glad you join us!</p>
                      <p>- Group 4</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="mb-5">
                      <h3 className="h4 font-weight-bold text-theme">Register</h3>
                    </div>
                    <h6 className="h5 mb-0">Join to Full Trip</h6>
                    <p className="text-muted mt-2 mb-5">#IngenieríaEstáEnParo</p>

                    <form onSubmit={(e) => submit(e)}>

                      <div className="form-group">
                        <label htmlFor="todo">Name</label>
                        <input onChange={(e) => handle(e)} id="name" value={data.name} type="text" className="form-control"/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="todo">Last Name</label>
                        <input onChange={(e) => handle(e)} id="lastName" value={data.lastName} type="text" className="form-control"/>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="todo">User</label>
                        <input onChange={(e) => handle(e)} id="user" value={data.user} type="text" className="form-control"/>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="todo">Date of Birth</label>
                        <input onChange={(e) => handle(e)} id="dateOfBirth" value={data.dateOfBirth} type="date" className="form-control"/>
                      </div>
                      
                      <div className="form-group mb-5">
                        <label htmlFor="email">Email address</label>
                        <input onChange={(e) => handle(e)} id="email" value={data.email} type="email" className="form-control"/>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => handle(e)} id="password" value={data.password} type="password" className="form-control"/>
                      </div>
                      
                      <div className="form-group mb-5">
                        <label htmlFor="password">Confirm password</label>
                        <input onChange={(e) => handle(e)} id="confirmPassword" value={data.confirmPassword} type="password" className="form-control"/>
                      </div>
                      
                      <button type="submit" className="btn btn-theme" id="btn-login">Register</button>
                    
                    </form>

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

export default SignUp;