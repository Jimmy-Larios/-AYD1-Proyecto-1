import React from 'react';

const Login = () => {
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
                        <form>
                          <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" />
                          </div>
                          <div className="form-group mb-5">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                          </div>
                          <button type="submit" className="btn btn-theme" id="btn-login">Login</button>
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