import React, { useEffect, useState } from "react";
import '../../styles/card.css';
import Axios from "axios";
import { URLDEFAULT } from "../../consts/globales";
import NavigationHotel from "./NavigationHotel";

const SeeCars = () => {
    const url = URLDEFAULT + "/room/getAll";

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
              <div className="course-preview" id="card-room">
                <h6>HABITACIÓN</h6>
                <h2>HOTEL</h2>
              </div>
              <div className="course-info">
                <h6>{data._id}</h6>
                <h2>{data.amountPeople}</h2>
                {/* <button className="btn-card">Submit</button> */}
              </div>
            </div>
          </div>
        );
    });

    return (
        <>
            <NavigationHotel/>
            { arr }
        </>
    )
};

export default SeeCars;