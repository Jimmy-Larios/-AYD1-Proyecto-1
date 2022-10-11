import React, { useEffect, useState } from "react";
import '../../styles/card.css';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { URLDEFAULT } from "../../consts/globales";

import NavigationUser from "./NavigationUser";

const HomeUsers = () => {
  const url = URLDEFAULT + "/room/getAll";
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

  function next(){
  }

  const arr = data.map((data, index) => {
      return (
          <div className="courses-container">
          <div className="course">
            <div className="course-preview" id="card-room">
              <h6>HABITACIÓN</h6>
              <h2>HOTEL</h2>
            </div>
            <div className="course-info">
              <h6>{data._id}</h6>
              <h2>No. Personas: {data.amountPeople}</h2>
              <button 
                className="btn-card"
                onClick={() => {
                  navigate('/registerReserveRoom', {
                    state:{
                      idSerivice: data._id
                    }});
                }}
              >Reservar</button>
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


/*
const HomeUsers = () => {
  const username = ReactSession.get("username");
  const idUser= ReactSession.get("id");
  console.log(username);
    return (
      <>
        <NavigationUser/>
        <h1>home users</h1>
      </>      
    );  
};
*/

export default HomeUsers;