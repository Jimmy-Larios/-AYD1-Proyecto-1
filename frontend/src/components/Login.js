import React, {useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URLDEFAULT } from '../consts/globales';

const Login = () => {
  let navigate = useNavigate();
  const url = URLDEFAULT+"/user/login";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function submit(e) {
    console.log(data.password);
   
      e.preventDefault();
      Axios.post(url, {
        
        email: data.email,
        password: data.password
       
        }).then (res => {
          alert("Login Successful");
          navigate("/login");
        })
        .catch((error) => {console.log(error)});
      
  }

  function handle(e) {
    const newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }


    return (
        <div id="login-section">
        <div id="main-wrapper" className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="card border-0">
                <div className="card-body p-0">
                  <div className="row no-gutters">
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="mb-5">
                          <h3 className="h4 font-weight-bold text-theme">Login</h3>
                        </div>
                        <h6 className="h5 mb-0">Welcome to Full Trip</h6>
                        <p className="text-muted mt-2 mb-5">#IngenieríaEstáEnParo</p>
                        <form onSubmit={(e) => submit(e)}>
                          <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input onChange={(e) => handle(e)} type="email" value={data.email} className="form-control" id="email" />
                          </div>
                          <div className="form-group mb-5">
                            <label htmlFor="password">Password</label>
                            <input onChange={(e) => handle(e)} type="password" value={data.password} className="form-control" id="password" />
                          </div>
                          <button type="submit"  className="btn btn-theme" id="btn-login">Login</button>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-inline-block">
                      <div className="account-block rounded-right" id="login-block">
                        <div className="overlay rounded-right" />
                        <div className="account-testimonial">
                          <h4 className="text-white mb-4">FULL TRIP</h4>
                          <p className="lead text-white">We make dreams come true!</p>
                          <p>- Group 4</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
              <p className="text-muted text-center mt-3 mb-0">Don't have an account? <a href='/sigup' className="text-primary ml-1">register</a></p>
              {/* end row */}
            </div>
            {/* end col */}
          </div>
          {/* Row */}
        </div>
      </div>
    )
};

export default Login;