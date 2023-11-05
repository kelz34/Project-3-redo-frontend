import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Daily Logs</div>
      </Link>
    </nav>
  );
};

export default Nav;
