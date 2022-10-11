import React, { useEffect, useState } from "react";
import '../../styles/card.css';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { URLDEFAULT } from "../../consts/globales";

import NavigationUser from "./NavigationUser";

const RentCar = () => {
    const url = URLDEFAULT + "/car/getAll";
    let navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get(url)
            .then(res => {
                console.log(`response ${res.data}`);
                setData(res.data);
            })    
            .catch(error => console.log(error));
    }, []);

    const arr = data.map((data, index) => {
        return (
            <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <h6>CARRO</h6>
                <h2>{data.carRegistration}</h2>
                <a href="#">View all chapters <i className="fas fa-chevron-right" /></a>
              </div>
              <div className="course-info">
                <h6>{data._id}</h6>
                <h2>{data.brand}</h2>
                <h4>{data.model}</h4>
                <h4>Q. {data.price}</h4>
                <p>que pdo</p>
                <button 
                  className="btn-card"
                  onClick={() => {
                  navigate('/registerReserveCar', {
                    state:{
                      idSerivice: data._id
                    }});
                  }}
                >Rentar</button>
              </div>
            </div>
          </div>
        );
    });

    return (
        <>
            <NavigationUser/>
            { arr }
        </>
    )
};

export default RentCar;