import React from "react";
import rcb from './rcb-img.png';
import csk from './csk-img.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './super.css';
export function SuperLeague() {
    return(
        <>
        <div className="bde">
         <div className="">
            <h1 className="text-white over">Super Over League</h1>
         </div>
         <div className="  row d-flex justify-content-center">
            <div className="col-lg-6 row mt-5">
          <div className=" col-lg-6 "><img src={rcb} alt="nopic" className="container-fluid offset-lg-2"/></div> 
          <div className=" col-lg-6"><img src={csk} alt="nopic" className="container-fluid"/></div>
         </div> 
         </div>
            </div>
                   
        
           
    
        </>
    )
}