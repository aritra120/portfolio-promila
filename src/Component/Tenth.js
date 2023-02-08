import React from 'react'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Company.css";

function Tenth() {
  return (
    <>
      <div className="container">
        <div className="title">Ranaghat Brojobala Girls High School</div>
        <div className="timeline">2016</div>
      </div>
      <div className='work'>
      <div className='specification'><span><FontAwesomeIcon icon={faArrowRight}/></span>Stream : Arts</div>
            <div className='specification'><span><FontAwesomeIcon icon={faArrowRight}/></span>Board : State Board (WBBSE)</div>
            <div className='specification'><span><FontAwesomeIcon icon={faArrowRight}/></span>Marks : 50.43%</div>
        </div>
    </>
  )
}

export default Tenth