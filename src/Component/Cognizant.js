import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import './Company.css'
function Cognizant() {
  return (
    <>
      <div className="container">
        <div className="title">Ranaghat Brojobala Girls High School</div>
        <div className="timeline">2018</div>
      </div>
      <div className='work'>
            <div className='specification'><span><FontAwesomeIcon icon={faArrowRight}/></span>Stream : Arts</div>
            <div className='specification'><span><FontAwesomeIcon icon={faArrowRight}/></span>Board : State Board (WBCHSE)</div>
            <div className='specification'><span><FontAwesomeIcon icon={faArrowRight}/></span>Marks : 69.20%</div>
        </div>
    </>
  )
}

export default Cognizant