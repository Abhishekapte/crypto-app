import React from 'react';
import { Link } from 'react-router-dom'
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1 className="NotFound-title">Welcome to the Cryptocurrency price Index</h1>
      <Link to="/" className="NotFound-link">Go to home page</Link>
    </div>
  );
}

export default NotFound;
