import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
      <div className = 'headermain-container'>
          <div className ='header-heading-container d-flex flex-column align-items-center justify-content-center text-white'>
          <h1>WELCOME TO SUNRISE TUTION</h1>
          <h5>Learn The New Skills And Be Confident</h5>
          <p><small>Lorem ipsum dolor sit, amet consectetur <br/> adipisicing elit. Ullam delectus dicta sed!</small></p>
          {/* <button className="btn btn-primary">APPOINTMENT NOW</button> */}
          </div>
      </div>
    );
};

export default HeaderMain;