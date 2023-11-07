import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1> Notes App</h1>
      <nav>
      <Link to="/">Create Note</Link>
      <span className="spacer"></span>
      <Link to="/notes">View Notes</Link> {/* Links to page where you view all notes */}
      </nav>
    </header>
  );
}

export default Header;
