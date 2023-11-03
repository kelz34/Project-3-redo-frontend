import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react"

// Dailylogs = index 
const Dailylogs = (props) => {

// return will iterate through each individual index from array above
return ( 
       <div className="dailylogs">
            <Link>
              {/* <h2>{dailyLogs}</h2> */}
            </Link>
          </div>  
  );
};



export default Dailylogs;
