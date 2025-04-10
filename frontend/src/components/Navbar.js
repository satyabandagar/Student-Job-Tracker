import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Student Job Tracker</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/">Login</Link>
          <Link className="btn btn-light" to="/jobs">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
