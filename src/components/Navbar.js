import React from 'react';
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Zipper</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Compress</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/unzip' ? "active" : ""}`} aria-current="page" to="/unzip">Decompress</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} aria-current="page" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;