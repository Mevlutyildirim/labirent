import React from "react";
import './header.css';
import {Link} from 'react-router-dom';

export default function header() {
  return (
    <div className="header">
      <Link to="/">Computer</Link>
      <Link to="/singular">Single Player</Link>
      <Link to="/multiple">Multiple Player</Link>
    </div>
  );
}
