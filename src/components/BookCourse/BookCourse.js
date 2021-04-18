import React from 'react';
import { useContext } from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import Payment from '../Payment/Payment';
import Shared from '../Shared/Shared';

const BookCourse = () => {
    const [signedInUser, setSignedInUser] = useContext(userContext)
    const title = useParams()
    console.log(title)
    const [services,setServices] = useState([])
    console.log(services)
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    
    const singleService = services.find(service => title.title == service.title)
    console.log(singleService)
    return (
        <div className = 'row'>
            <div className ='col-md-2'>
            <Shared></Shared>
            </div>
          
            <div className ='col-md-10' style={{backgroundColor:'#bec2c5b5'}}>
                <h4 className ='bg-white px-5 py-1 mx-5 my-3' >{signedInUser.displayName} </h4>
                <h4 className ='bg-white px-5 py-1 mx-5 my-3' >{signedInUser.email} </h4>

                <h4 className ='bg-white px-5 py-1 mx-5 my-3' >{title.title}</h4>
            <Payment singleService={singleService}></Payment>
            </div>
        </div>
    );
};

export default BookCourse;
