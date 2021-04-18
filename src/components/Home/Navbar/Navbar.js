import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Sunrise Tution</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link className ="nav-link active" to="/bookingList">Dashboard</Link>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="#">Link</a> */}
                <Link className ="nav-link active" to="/logIn">LogIn</Link>
              </li>
             
              <li class="nav-item">
                {/* <a class="nav-link" href="#">Link</a> */}
                <Link className ="nav-link active" to="/">Contact Us</Link>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="#">Link</a> */}
                <Link className ="nav-link active" to="/">About Us</Link>
              </li>
             
             
            </ul>
           
          </div>
        </div>
      </nav>
    );
};

export default Navbar;