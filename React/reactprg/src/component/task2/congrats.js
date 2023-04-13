import React from "react";
import './congrats.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './congrats-card-profile-img.png';
import watch from './congrats-card-watch-img.png';

 function CongMessage(){
    return(
        <>
       <div className="bdy">
            <div className="text-center"><h1 className="text-center pt-5">Congratulations</h1></div>
            <div className="d-flex justify-content-center ">
                <div className="col-4 col-lg-4 " id="bagd1">
                    <div className=" d-flex justify-content-center rounded bg-primary pt-3">
                    <img src={profile} alt="nopic" id="pic"/></div>
                    <h2 className="text-center">Kiran v</h2>
                    <p className="text-center">Vishnu Institute of Computer Education and Technology, Bhimawaram</p>
                    <div className=" d-flex justify-content-center">
                        <img src={watch} alt="nopic"/>
                    </div>
                </div>
            </div>
         </div>
    </>
    )
}
export default CongMessage;