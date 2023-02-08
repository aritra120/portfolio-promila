import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Company.css";

function Cozeva() {
  return (
    <>
      <div className="container">
        <div className="title">Amity University, Kolkata</div>
        <div className="timeline">2019 - 2023 </div>
      </div>
      <div className='work'>
      <div className='specification'><span><FontAwesomeIcon icon={faArrowRight}/></span>Degree : Bachelor of Designing</div>
            <div className='specification'><span><FontAwesomeIcon icon={faArrowRight}/></span>Specialization - Fashion Designing</div>
            <div className='specification'><span><FontAwesomeIcon icon={faArrowRight}/></span>CGPA : 6.41</div>
        </div>
    </>
  );
}

export default Cozeva;
