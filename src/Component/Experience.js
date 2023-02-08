import React, { useEffect, useState } from 'react'
import './Experience.css';
import classNames from "classnames";
import Cozeva from './Cozeva';
import Cognizant from './Cognizant';
import Tenth from './Tenth';
function Experience() {
  const [company, setCompany] = useState(-1);

  useEffect (()=> {
    if(company === -1){
      setCompany(1);
    } 
  },[]);
  return (
    <>
        <div id="box">
          <div id='left-box'>
            <div className={classNames({"company-button-selected":company === 1, "company-button":true, "button-one":true})} onClick={() => setCompany(1)}>Graduation</div>
            <div className={classNames({"company-button-selected":company === 2, "company-button":true, "button-one":true})} onClick={() => setCompany(2)}>12th</div>
            <div className={classNames({"company-button-selected":company === 3, "company-button":true, "button-one":true})} onClick={() => setCompany(3)}>10th</div>
          </div>
          <div id='right-box'>
          {(company === 1) && <Cozeva/>}
          {(company === 2) && <Cognizant />}
          {(company === 3) && <Tenth/>}
          </div>
        </div>
    </>
  )
}

export default Experience