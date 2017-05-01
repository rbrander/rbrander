import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div className="bg-light-blue pa3 flex flex-column flex-row-ns space-between items-center fixed top-0 left-0 right-0 z-1">
    <Link className="link black ph3" to="/"><strong>rbrander.com</strong></Link>
    <div className="pa2">
      <Link className="link black" to="/About">About</Link>
      <span className="gray"> :: </span>
      <Link className="link black" to="/Snippets">Code Snippets</Link>
    </div>
  </div>
);

export default Header;
