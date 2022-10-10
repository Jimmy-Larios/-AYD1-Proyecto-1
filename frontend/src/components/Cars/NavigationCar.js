import React from "react";
import { useNavigate } from "react-router-dom";

const NavegationCar = () => {
    let navigate = useNavigate();
    return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">F U L L - T R I P</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/homeCarros">Register car</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/SeeCars">See cars</a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    )
};

export default NavegationCar;