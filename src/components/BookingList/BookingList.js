import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Shared from '../Shared/Shared';

const BookingList = () => {
    const [signedInUser, setSignedInUser] = useContext(userContext)
    const [bookingList, setBookingList] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getSingleService?email='+signedInUser.email)
        .then(res=>res.json())
        .then(data => setBookingList(data))
    },[])
    console.log(bookingList)
    return (
        <div className ='row'>
            <div className ='col-md-2'>
            <Shared></Shared>
            </div>
            <div  style={{backgroundColor:'#bec2c5b5'}} className ='col-md-10 row'>
                {
                    bookingList.map(book=> <div className ='col-md-4 bg-secondery py-5'> 
                        <h6>{book.title}</h6>
                        <p>{book.description}</p>
                    
                    </div> )
                }
            </div>
        </div>
    );
};

export default BookingList;