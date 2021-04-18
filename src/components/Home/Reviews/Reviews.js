import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import servicePic1 from '../../../images/service-1.jpg'
import servicePic2 from '../../../images/service-2.jpg'
import servicePic3 from '../../../images/service-3.jpg'
import Review from './Review';


const Reviews = () => {
    // const services = [
    //     {
    //         title : 'Mr XYZ',
    //         company : 'CEO, XYZ Company',
    //         img : servicePic1,
    //         details : 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'
    
    //     },
    //     {
    //         title : 'Mr XYZ',
    //         company : 'CEO, XYZ Company',
    //         img : servicePic2,
    //         details : 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'
    
    //     },
    //     {
    //         title : 'Mr XYZ',
    //         company : 'CEO, XYZ Company',
    //         img : servicePic3,
    //         details : 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'
    
    //     },
    //     ]

    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    

    return (
            <div>
            <h2 style = {{textAlign : 'center'}}>Reviews</h2>
            <div className= 'row d-flex mx-5 px-5 my-5'>
                {
                    services.map(service => <Review service ={service}></Review> )
                }
            </div>
        </div>
    );
};

export default Reviews;