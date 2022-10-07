import React from 'react'
import '../styles/form.css';

const Form = () => {
  return (
    <div id="register-section">
        <div id="main-wrapper" class="container">
            <div className="row justify-content-center">
                <div className="col-xl-10">
                    <div className="card border-0">
                        <div className="card-body p-0">
                            <div className="row no-gutters">
                                
                                <div className="col-lg-6 d-none d-lg-inline-block">
                                    <div className="account-block rounded-right" id="register-block">
                                        <div className="overlay rounded-right"></div>
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
                                        <form>
                                            <div className="form-group">
                                                <label for="todo">Name</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="todo">Last Name</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="todo">User</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="todo">Date of Birth</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1"/>
                                            </div>
                                            <div className="form-group mb-5">
                                                <label for="email">Email address</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="password">Password</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1"/>
                                            </div>
                                            <div className="form-group mb-5">
                                                <label for="password">Confirm password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                                            </div>
                                            <button type="submit" class="btn btn-theme" id="btn-login">Register</button>
                                        </form>
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

export default Form