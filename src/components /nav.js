import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Daily Logs</div>
      </Link>
    </div>
  );
};

export default Nav;
