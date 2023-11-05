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
            // Displays the the name of the weeks and shows the symbols in the browswer as a route params
            return (
                <Link to={`/notes/${symbol}`} >
                    <h2>{day}</h2>
                </Link>
            )
        })}
       </div>
      )    
  }
  
  export default Days;
  

