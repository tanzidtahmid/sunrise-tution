import React, { useContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { userContext } from '../../App';

const Shared = () => {
  const [signedInUser, setSignedInUser] =useContext(userContext)
    const [admins,setAdmin] = useState([])
    const [isValid,setIsValid] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:5000/getAdmin')
        .then(res=>res.json())
        .then(data => setAdmin(data))     
   
    },[])
      const isAdminValid = admins.find(admin => admin.email === signedInUser.email)
      console.log(isAdminValid)
      // if (isAdminValid.length>0) {
      //   setIsValid(true)
      // }
    return (
       <section>
          <ul>
        
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookingList">Book</Link>
          </li>
          <li>
            <Link to="/addReview">Add Review</Link>
          </li>
          <li>
            <Link to="/orderList">Order List</Link>
          </li>
          </ul>
         { isAdminValid &&
         <ul>
          <li>
            <Link to="/makeAdmin">Add Admin</Link>
          </li>
          <li>
            <Link to="/addService">Add Service</Link>
          </li>
          <li>
            <Link to="/manageService">Manage Product</Link>
          </li>
          </ul>
}
         
       
       </section>
    );
};

export default Shared;