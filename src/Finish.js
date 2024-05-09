import { useState,useEffect} from "react";
import React from "react";
import {useNavigate} from "react-router-dom";
import "./Finish.css"
function Finish()
{
    const [time,settime]=useState(5);
    const navigate=useNavigate();
    useEffect(() => {
        console.log(time);
        const timer = setInterval(() => {
          if (time > 0) {
            settime(time- 1); // Decrement count every second
          } else {
            clearInterval(timer);
            navigate("/");
          }
        }, 1000);
        return () => clearInterval(timer);
    }, [time]);
    return <div><div className="finish-outer">
        <img className="finish-img" src="./Tick + round.png"></img>
        <p className="success">Submitted Succesfullly</p>
        <p className="congrats">Congratulations</p>
        <p className="message">Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
    </div>
    <div className="x"><p className="redirect">Redirecting you to home page in <span className="t">{time} seconds</span></p></div>
    </div>
}
export default Finish;