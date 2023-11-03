import { Link } from "react-router-dom";

const Days = (props) => {
    const dailyLogs = [
        { day: "Sunday",  symbol: "Sun"},
        { day: "Monday",  symbol: "Moon"},
        { day: "Tuesday",  symbol: "Mars"},
        { day: "Wednesday",  symbol: "Mercury"},
        { day: "Thursday",  symbol: "Jupiter"},
        { day: "Friday",  symbol: "Venus"},
        { day: "Saturday",  symbol: "Saturn"}
      ];

      return ( 
        // iterate through array above 
       <div className="dailylogs">
        {dailyLogs.map((days) => {
            const { day, symbol } = days;

            return (
                <Link to={`/days/${symbol}`} >
                    <h2>{day}</h2>
                </Link>
            )
        })}
       </div>
      )    
  }
  
  export default Days;
  

