import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div className="bg-light-blue pa3 flex flex-column flex-row-ns space-between items-center fixed top-0 left-0 right-0">
    <Link className="link black" to="/"><strong>rbrander.com</strong></Link>
    <div className="pa2">
      <Link to="/About">About</Link>
      <span> | </span>
      <Link to="/Portfolio">Portfolio</Link>
    </div>
  </div>
);

export default Header;