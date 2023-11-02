// This page will all the days of the week
import React from "react";
import { Link } from "react-router-dom";

const Dailylogs = (props) => {
// Create an array of days 
  const dailyLogs = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday", 
  ];

// return will iterate over each day
return (
  <div className="dailylogs">
    <Link to='/sunday'>
      <h2>{dailyLogs[0]}</h2>
    </Link>
    <Link to='/monday'>
      <h2>{dailyLogs[1]}</h2>
    </Link>
    <Link to='/tuesday'>
      <h2>{dailyLogs[2]}</h2>
    </Link>
    <Link to='/wednesday'>
      <h2>{dailyLogs[3]}</h2>
    </Link>
    <Link to='/thursday'>
      <h2>{dailyLogs[4]}</h2>
    </Link>
    <Link to='/friday'>
      <h2>{dailyLogs[5]}</h2>
    </Link>
    <Link to='/saturday'>
      <h2>{dailyLogs[6]}</h2>
    </Link>
  </div>
  );
};



export default Dailylogs;
