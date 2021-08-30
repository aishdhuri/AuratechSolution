import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid p-3">
        <h3 className="logo" to="/">AuraTechSolution</h3>
        <button className="navbar-toggler collapsed bg-white" role="button" data-bs-toggle="collapse" href="#navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-inline-block " id="navbarText">

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="menu_active" exact className="nav-link dark" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
            </li>

          </ul>
        </div>
      </div>

    </nav>
  );
};
export default Navbar;
