import React, { useEffect, useState } from "react";
import '../../styles/card.css';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { URLDEFAULT } from "../../consts/globales";
import NavigationUser from "./NavigationUser";

const BuyTicket = () => {
    const url = URLDEFAULT + "/flight/getAll";
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
              <div className="course-preview" id="card-flight">
                <h6>VUELO</h6>
                <h2>Tipo: {data.typeFlight}</h2>
                <a href="#">(1 outbound trip, 2 round trip)<i className="fas fa-chevron-right" /></a>
              </div>
              <div className="course-info">
                <h6>{data._id}</h6>
                <h5>Fecha: {data.travelDate}</h5>
                <h5>Origen: {data.origin}</h5>
                <h5>Destino: {data.destination}</h5>
                <h5>Asientos Disponibles: {data.availableSeats}</h5>
                <h5>Precio: Q. {data.price}</h5>
                <button 
                  className="btn-card"
                  onClick={() => {
                  navigate('/registerReserveFlight', {
                    state:{
                      idSerivice: data._id
                    }});
                  }}
                >Comprar</button>
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

export default BuyTicket;